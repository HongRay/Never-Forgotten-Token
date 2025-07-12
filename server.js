import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { 
  createThirdwebClient, 
  getContract, 
  sendTransaction, 
  prepareContractCall,
  readContract,
  simulateTransaction
} from 'thirdweb';
import { toWei } from 'thirdweb';
import { deployModularContract } from 'thirdweb/modules';
import { MintableERC721, BatchMetadataERC721 } from 'thirdweb/modules';
import { mintTo } from 'thirdweb/extensions/erc721';
import { sepolia } from 'thirdweb/chains';
import { privateKeyToAccount } from 'thirdweb/wallets';
import { loadAssets, loadSales, saveAssets, saveSales } from './storage.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Thirdweb client with v5 syntax
const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
});

// Use Ethereum Sepolia testnet
const chain = sepolia;
console.log('Chain configuration:', chain);

// Persistent storage with JSON files
let assets = loadAssets();
let sales = loadSales();
let contractAddress = process.env.CONTRACT_ADDRESS || null;

console.log(`📁 Loaded ${assets.length} assets and ${sales.length} sales from storage`);
if (contractAddress) {
  console.log(`📄 Using contract: ${contractAddress}`);
}


// Create account from private key
const getAccount = () => {
  return privateKeyToAccount({
    client,
    privateKey: process.env.PRIVATE_KEY,
  });
};

// 🚀 1. Deploy ERC1155 Contract (run once)
app.post('/deploy-contract', async (_, res) => {
  try {
    const account = getAccount();

    console.log('🚀 Deploying ERC721 contract...');
    
    // Deploy the modular contract - let's debug what this returns
    console.log('Deploying modular contract...');
    const deploymentResult = await deployModularContract({
      client,
      chain,
      account,
      core: "ERC721", // Deploy ERC721 core contract
      params: {
        name: "Hackathon Buyable Assets",
        symbol: "HACK",
        contractURI: "https://marketplace.example.com/contract-metadata.json",
      },
      modules: [
        MintableERC721.module({
          primarySaleRecipient: account.address,
        }),
        BatchMetadataERC721.module(),
      ],
    });
    
    console.log('✅ deployModularContract returned contract address:', deploymentResult);
    
    // deployModularContract returns the contract address directly as a string
    contractAddress = deploymentResult;
    
    const transactionResult = {
      contractAddress,
      transactionHash: null, // deployModularContract doesn't return transaction hash, only contract address
    };
    
    console.log("✅ Contract deployed:", contractAddress);
    
    res.json({ 
      success: true, 
      contractAddress,
      deployer: account.address,
      explorerUrl: `https://sepolia.etherscan.io/address/${contractAddress}`,
      transactionHash: transactionResult.transactionHash,
      message: "🎉 ERC721 contract deployed successfully!"
    });
  } catch (error) {
    console.error('❌ Deploy error:', error);
    res.status(500).json({ 
      error: error.message,
      tip: "Make sure you have ETH on Sepolia testnet!"
    });
  }
});

// 📝 2. Create Asset (with price and supply configuration)
app.post('/assets', (req, res) => {
  const { name, description, imageUrl, price, maxSupply, owner } = req.body;
  
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  
  const asset = {
    id: Date.now().toString(),
    name,
    description,
    imageUrl: imageUrl || `https://via.placeholder.com/400x400/8b5cf6/ffffff?text=${encodeURIComponent(name)}`,
    price: price || "0.001", // Default 0.001 ETH 
    maxSupply: maxSupply || 100,
    soldCount: 0,
    owner: owner || getAccount().address,
    status: 'created',
    createdAt: new Date().toISOString(),
    availableSupply: 0 // Will be set after tokenization
  };
  
  assets.push(asset);
  saveAssets(assets); // Save to file
  console.log(`✨ Created asset: ${name} - Price: ${asset.price} ETH`);
  
  res.json({ 
    success: true, 
    asset,
    message: `🎨 Asset "${name}" created! Ready to tokenize.`
  });
});

// 🪙 3. Tokenize Asset (mint initial supply using Thirdweb v5)
app.post('/tokenize/:assetId', async (req, res) => {
  try {
    const { assetId } = req.params;
    // ERC721 tokens are unique - no supply parameter needed
    
    if (!contractAddress) {
      return res.status(400).json({ 
        error: 'Deploy contract first!',
        tip: 'Use POST /deploy-contract endpoint'
      });
    }
    
    // Find asset
    const asset = assets.find(a => a.id === assetId);
    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    
    if (asset.status === 'tokenized') {
      return res.status(400).json({ error: 'Asset already tokenized' });
    }
    
    // Get contract instance with v5 syntax
    const contract = getContract({
      client,
      chain: sepolia, // Use the specific chain object
      address: contractAddress,
    });
    
    const account = getAccount();
    
    // Prepare NFT metadata
    const metadata = {
      name: asset.name,
      description: `${asset.description}\\n\\n💰 Price: ${asset.price} ETH\\n📦 Max Supply: ${asset.maxSupply}\\n🏷️ Asset ID: ${assetId}`,
      image: asset.imageUrl,
      attributes: [
        { trait_type: "Asset ID", value: assetId },
        { trait_type: "Price", value: `${asset.price} ETH` },
        { trait_type: "Max Supply", value: asset.maxSupply.toString() },
        { trait_type: "Created", value: asset.createdAt },
        { trait_type: "Category", value: "Buyable Asset" }
      ]
    };
    
    console.log(`🪙 Tokenizing "${asset.name}" as unique ERC721 NFT...`);
    
    // Mint using Thirdweb v5 ERC721 mintTo function
    const transaction = mintTo({
      contract,
      to: account.address, // Mint to marketplace owner initially
      nft: metadata,
    });
    
    // Optional: Simulate transaction first to catch errors early
    try {
      const simulation = await simulateTransaction({ transaction, account });
      console.log("✅ Transaction simulation successful");
    } catch (simError) {
      console.error("❌ Transaction simulation failed:", simError);
      // Continue anyway as simulation might fail but actual transaction could succeed
    }
    
    // Send transaction
    const result = await sendTransaction({
      transaction,
      account,
    });
    
    // Update asset status - ERC721 creates unique tokens
    asset.status = 'tokenized';
    asset.tokenId = assetId; // Use assetId as tokenId for simplicity
    asset.availableSupply = 1; // ERC721 tokens are unique (1 copy only)
    asset.transactionHash = result.transactionHash;
    saveAssets(assets); // Save to file
    
    console.log(`✅ Tokenized "${asset.name}" - TX: ${result.transactionHash}`);
    
    res.json({
      success: true,
      tokenId: assetId,
      transactionHash: result.transactionHash,
      supply: 1, // ERC721 is always unique
      metadata,
      explorerUrl: `https://sepolia.etherscan.io/tx/${result.transactionHash}`,
      openseaUrl: `https://testnets.opensea.io/assets/sepolia/${contractAddress}/${assetId}`,
      message: `🎉 Successfully tokenized "${asset.name}" as unique ERC721 NFT!`
    });
    
  } catch (error) {
    console.error('❌ Detailed tokenization error:', {
      message: error.message,
      code: error.code,
      details: error.details,
      stack: error.stack
    });
    
    // Check specific error types
    if (error.message?.includes('insufficient funds')) {
      return res.status(500).json({ 
        error: 'Insufficient funds for gas',
        tip: 'Ensure your wallet has enough ETH on Sepolia testnet'
      });
    }
    
    if (error.message?.includes('nonce')) {
      return res.status(500).json({ 
        error: 'Transaction nonce issue',
        tip: 'There may be pending transactions. Please wait and try again.'
      });
    }
    
    res.status(500).json({ 
      error: error.message || 'Transaction failed',
      details: error.details,
      tip: "Check your wallet has enough ETH for gas fees on Sepolia testnet"
    });
  }
});

// 💰 4. BUY NFT - The core marketplace functionality!
app.post('/buy/:assetId', async (req, res) => {
  try {
    const { assetId } = req.params;
    const { buyer, quantity = 1, paymentMethod = 'crypto' } = req.body;
    
    if (!buyer) {
      return res.status(400).json({ error: 'Buyer address is required' });
    }
    
    // Find asset
    const asset = assets.find(a => a.id === assetId);
    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }
    
    if (asset.status !== 'tokenized') {
      return res.status(400).json({ 
        error: 'Asset not tokenized yet',
        tip: `Use POST /tokenize/${assetId} first`
      });
    }
    
    if (asset.availableSupply < 1 || quantity > 1) {
      return res.status(400).json({ 
        error: `ERC721 NFT is unique - only 1 copy available and already ${asset.availableSupply ? 'available' : 'sold'}.`
      });
    }
    
    // Calculate pricing for ERC721 (always quantity = 1)
    const totalPrice = parseFloat(asset.price);
    // Note: priceInWei would be used for actual payment processing
    // const priceInWei = toWei(totalPrice.toString());
    
    console.log(`💰 Processing purchase: "${asset.name}" for ${totalPrice} ETH to ${buyer}`);
    
    // For hackathon: simulate the purchase process
    // In production, you'd handle actual ETH transfer and NFT transfer
    
    const sale = {
      id: Date.now().toString(),
      assetId,
      buyer,
      quantity,
      pricePerUnit: asset.price,
      totalPrice,
      paymentMethod,
      timestamp: new Date().toISOString(),
      txHash: `hackathon_tx_${Date.now()}`, // Simulated for demo
      status: 'completed'
    };
    
    sales.push(sale);
    saveSales(sales); // Save to file
    
    // Update asset supply - ERC721 is now sold (0 available)
    asset.soldCount = 1;
    asset.availableSupply = 0;
    saveAssets(assets); // Save to file
    
    console.log(`🎉 SALE COMPLETED: "${asset.name}" sold to ${buyer.slice(0,8)}... for ${totalPrice} ETH`);
    
    res.json({
      success: true,
      sale,
      asset: {
        name: asset.name,
        remainingSupply: asset.availableSupply,
        totalSold: asset.soldCount
      },
      revenue: `${totalPrice} ETH`,
      message: `🎉 Successfully purchased "${asset.name}" for ${totalPrice} ETH!`,
      tip: "In production, this would transfer actual NFTs to your wallet"
    });
    
  } catch (error) {
    console.error('❌ Purchase error:', error);
    res.status(500).json({ error: error.message });
  }
});

// 📊 5. Get All Assets (with marketplace stats)
app.get('/assets', (req, res) => {
  const { status, sortBy = 'created' } = req.query;
  
  let filteredAssets = [...assets];
  
  if (status) {
    filteredAssets = filteredAssets.filter(a => a.status === status);
  }
  
  // Sort assets
  if (sortBy === 'price') {
    filteredAssets.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortBy === 'popular') {
    filteredAssets.sort((a, b) => b.soldCount - a.soldCount);
  } else {
    filteredAssets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  
  const stats = {
    total: assets.length,
    created: assets.filter(a => a.status === 'created').length,
    tokenized: assets.filter(a => a.status === 'tokenized').length,
    totalSales: sales.length,
    totalRevenue: sales.reduce((sum, sale) => sum + sale.totalPrice, 0)
  };
  
  res.json({ 
    assets: filteredAssets,
    stats,
    contractAddress
  });
});

// 📄 6. Get Asset Details
app.get('/assets/:assetId', (req, res) => {
  const asset = assets.find(a => a.id === req.params.assetId);
  if (!asset) {
    return res.status(404).json({ error: 'Asset not found' });
  }
  
  // Get sales history for this asset
  const assetSales = sales.filter(s => s.assetId === req.params.assetId);
  
  res.json({ 
    asset,
    salesHistory: assetSales,
    totalSold: assetSales.reduce((sum, sale) => sum + sale.quantity, 0),
    totalRevenue: assetSales.reduce((sum, sale) => sum + sale.totalPrice, 0)
  });
});

// 🛒 7. Get All Sales History  
app.get('/sales', (req, res) => {
  const { buyer, limit = 50 } = req.query;
  
  let filteredSales = [...sales];
  
  if (buyer) {
    filteredSales = filteredSales.filter(s => 
      s.buyer.toLowerCase() === buyer.toLowerCase()
    );
  }
  
  // Sort by newest first and limit results
  filteredSales = filteredSales
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, parseInt(limit));
  
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
  
  res.json({ 
    sales: filteredSales,
    totalSales: sales.length,
    totalRevenue: `${totalRevenue} ETH`
  });
});

// 👤 8. Get Sales by Buyer
app.get('/sales/buyer/:address', (req, res) => {
  const { address } = req.params;
  
  const buyerSales = sales.filter(s => 
    s.buyer.toLowerCase() === address.toLowerCase()
  );
  
  const totalSpent = buyerSales.reduce((sum, sale) => sum + sale.totalPrice, 0);
  const totalItems = buyerSales.reduce((sum, sale) => sum + sale.quantity, 0);
  
  res.json({ 
    sales: buyerSales,
    buyerStats: {
      totalPurchases: buyerSales.length,
      totalSpent: `${totalSpent} ETH`,
      totalItems
    }
  });
});

// 🔍 9. Search Assets
app.get('/search', (req, res) => {
  const { q, priceMin, priceMax, status } = req.query;
  
  let results = [...assets];
  
  if (q) {
    const query = q.toLowerCase();
    results = results.filter(asset => 
      asset.name.toLowerCase().includes(query) || 
      asset.description.toLowerCase().includes(query)
    );
  }
  
  if (priceMin) {
    results = results.filter(asset => parseFloat(asset.price) >= parseFloat(priceMin));
  }
  
  if (priceMax) {
    results = results.filter(asset => parseFloat(asset.price) <= parseFloat(priceMax));
  }
  
  if (status) {
    results = results.filter(asset => asset.status === status);
  }
  
  res.json({ 
    results,
    count: results.length,
    query: { q, priceMin, priceMax, status }
  });
});

// ❤️ 10. Health Check & Marketplace Stats
app.get('/health', (_, res) => {
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
  const totalNFTsSold = sales.reduce((sum, sale) => sum + sale.quantity, 0);
  
  const popularAsset = assets.reduce((prev, current) => 
    (prev.soldCount > current.soldCount) ? prev : current, 
    { soldCount: 0, name: 'None' }
  );
  
  res.json({ 
    status: '🚀 Marketplace running!',
    contractAddress,
    network: 'Ethereum Sepolia Testnet',
    stats: {
      assetsCreated: assets.length,
      assetsTokenized: assets.filter(a => a.status === 'tokenized').length,
      totalSales: sales.length,
      totalNFTsSold,
      totalRevenue: `${totalRevenue} ETH`,
      popularAsset: popularAsset.name
    },
    endpoints: {
      deploy: 'POST /deploy-contract',
      createAsset: 'POST /assets',
      tokenize: 'POST /tokenize/:assetId', 
      buy: 'POST /buy/:assetId',
      browse: 'GET /assets',
      search: 'GET /search?q=...'
    },
    tips: [
      "🔗 Get free ETH: https://sepoliafaucet.com/",
      "🔑 Get Thirdweb API key: https://thirdweb.com/dashboard",
      "🎨 This is a hackathon demo - real blockchain integration!",
      "💰 All transactions are on Ethereum Sepolia testnet (FREE!)"
    ]
  });
});


// 🎯 Gas Price Oracle
app.get('/gas-price', async (_, res) => {
  try {
    // Get current gas prices for optimization
    const gasPrice = await client.request({
      method: "eth_gasPrice",
      params: []
    });
    
    const gasPriceGwei = Number(BigInt(gasPrice)) / 1e9;
    
    res.json({
      current: {
        wei: gasPrice,
        gwei: gasPriceGwei,
        matic: (gasPriceGwei * 21000) / 1e9 // Estimated for simple transfer
      },
      optimized: {
        gwei: Math.max(1, gasPriceGwei * 0.9), // 10% lower
        tip: "Use 10% lower gas price for non-urgent transactions"
      },
      network: "Ethereum Sepolia Testnet",
      recommendation: gasPriceGwei < 50 ? "Good time to transact" : "Consider waiting for lower gas"
    });
    
  } catch (error) {
    res.status(500).json({ error: "Could not fetch gas prices" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
🚀 NFT Marketplace Server Running!
📍 http://localhost:${PORT}

💡 Hackathon-ready features:
   ✅ ERC721 unique NFTs 
   ✅ Real blockchain deployment (Ethereum Sepolia)
   ✅ Buyable assets with crypto pricing
   ✅ Revenue tracking & analytics
   ✅ Fast in-memory storage
   
🔥 Demo Flow:
   1. POST /deploy-contract (deploy ERC721)
   2. POST /assets (create buyable asset)
   3. POST /tokenize/:id (mint unique NFT)
   4. POST /buy/:id (purchase with crypto!)
   5. GET /health (check revenue 💰)

🌐 Network: Ethereum Sepolia Testnet (FREE!)
🎯 Ready to sell some NFTs! 
  `);
});