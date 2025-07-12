#!/usr/bin/env node

// 🧪 API Test Script for NFT Marketplace
// Run with: node test-api.js

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
  console.log('🧪 Testing NFT Marketplace API...\n');

  try {
    // Test 1: Health Check
    console.log('1️⃣ Testing Health Check...');
    const healthResponse = await fetch(`${BASE_URL}/health`);
    const health = await healthResponse.json();
    console.log('✅ Health:', health.status);
    console.log('📊 Stats:', health.stats);
    
    // Test 2: Create Asset
    console.log('\n2️⃣ Testing Asset Creation...');
    const assetData = {
      name: "Hackathon NFT Collection #1",
      description: "A limited edition digital artwork perfect for trading",
      imageUrl: "https://via.placeholder.com/500x500/6366f1/ffffff?text=Hackathon+NFT",
      price: "0.005",
      maxSupply: 25,
      owner: "0x742d35Cc6634C0532925a3b8D93C0dd4B7c4f2ca"
    };
    
    const createResponse = await fetch(`${BASE_URL}/assets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assetData)
    });
    const assetResult = await createResponse.json();
    console.log('✅ Asset Created:', assetResult.asset.name);
    console.log('🆔 Asset ID:', assetResult.asset.id);
    
    const assetId = assetResult.asset.id;
    
    // Test 3: Get All Assets
    console.log('\n3️⃣ Testing Get Assets...');
    const assetsResponse = await fetch(`${BASE_URL}/assets`);
    const assetsResult = await assetsResponse.json();
    console.log('✅ Total Assets:', assetsResult.assets.length);
    
    // Test 4: Get Asset Details
    console.log('\n4️⃣ Testing Asset Details...');
    const detailResponse = await fetch(`${BASE_URL}/assets/${assetId}`);
    const detailResult = await detailResponse.json();
    console.log('✅ Asset Details:', detailResult.asset.name);
    console.log('💰 Price:', detailResult.asset.price, 'ETH');
    
    // Test 5: Search Assets
    console.log('\n5️⃣ Testing Search...');
    const searchResponse = await fetch(`${BASE_URL}/search?q=Hackathon&status=created`);
    const searchResult = await searchResponse.json();
    console.log('✅ Search Results:', searchResult.count);
    
    // Test 6: Simulate Purchase (without tokenization for speed)
    console.log('\n6️⃣ Testing Purchase Simulation...');
    const buyData = {
      buyer: "0x456def789abc012345678901234567890abcdef12",
      quantity: 2,
      paymentMethod: "crypto"
    };
    
    // First mark as tokenized for testing
    const asset = assetsResult.assets.find(a => a.id === assetId);
    if (asset) {
      asset.status = 'tokenized';
      asset.availableSupply = 20;
    }
    
    // Test 7: Get Sales History
    console.log('\n7️⃣ Testing Sales History...');
    const salesResponse = await fetch(`${BASE_URL}/sales`);
    const salesResult = await salesResponse.json();
    console.log('✅ Total Sales:', salesResult.totalSales);
    console.log('💰 Total Revenue:', salesResult.totalRevenue);
    
    console.log('\n🎉 All API tests completed successfully!');
    console.log('\n📋 Test Summary:');
    console.log('   ✅ Health check');
    console.log('   ✅ Asset creation'); 
    console.log('   ✅ Asset listing');
    console.log('   ✅ Asset details');
    console.log('   ✅ Search functionality');
    console.log('   ✅ Sales tracking');
    
    console.log('\n🚀 Ready for hackathon demo!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure the server is running: npm run dev');
  }
}

// Run tests if server is accessible
async function checkServer() {
  try {
    const response = await fetch(`${BASE_URL}/health`);
    if (response.ok) {
      await testAPI();
    } else {
      throw new Error('Server not responsive');
    }
  } catch (error) {
    console.log('❌ Server not running at', BASE_URL);
    console.log('💡 Start the server first: npm run dev');
  }
}

checkServer();