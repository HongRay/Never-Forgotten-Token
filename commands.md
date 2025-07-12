# NFT Marketplace API Commands

This document lists all available API endpoints for the ERC721 NFT Marketplace.

## Base URL
```
http://localhost:3000
```

## 1. Contract Deployment

### Deploy ERC721 Contract
**Endpoint:** `POST /deploy-contract`

**Description:** Deploy a new ERC721 contract to Ethereum Sepolia testnet

**Request Body:** None required

**Response:**
```json
{
  "success": true,
  "contractAddress": "0x...",
  "deployer": "0x...",
  "explorerUrl": "https://sepolia.etherscan.io/address/0x...",
  "transactionHash": null,
  "message": "🎉 ERC721 contract deployed successfully!"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/deploy-contract
```

## 2. Asset Management

### Create Asset
**Endpoint:** `POST /assets`

**Description:** Create a new buyable asset (before tokenization)

**Request Body:**
```json
{
  "name": "Asset Name",
  "description": "Asset description",
  "imageUrl": "https://example.com/image.jpg", // Optional
  "price": "0.001", // ETH price, optional (default: 0.001)
  "maxSupply": 100, // Optional (default: 100)
  "owner": "0x..." // Optional (default: deployer address)
}
```

**Response:**
```json
{
  "success": true,
  "asset": {
    "id": "1234567890",
    "name": "Asset Name",
    "description": "Asset description",
    "imageUrl": "https://...",
    "price": "0.001",
    "maxSupply": 100,
    "soldCount": 0,
    "owner": "0x...",
    "status": "created",
    "createdAt": "2023-...",
    "availableSupply": 0
  },
  "message": "🎨 Asset \"Asset Name\" created! Ready to tokenize."
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/assets \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Cool NFT",
    "description": "A very cool NFT",
    "price": "0.005"
  }'
```

### Get All Assets
**Endpoint:** `GET /assets`

**Description:** Retrieve all assets with optional filtering and sorting

**Query Parameters:**
- `status` - Filter by status: `created` or `tokenized`
- `sortBy` - Sort by: `created`, `price`, or `popular`

**Response:**
```json
{
  "assets": [...],
  "stats": {
    "total": 5,
    "created": 2,
    "tokenized": 3,
    "totalSales": 1,
    "totalRevenue": 0.005
  },
  "contractAddress": "0x..."
}
```

**Example:**
```bash
curl "http://localhost:3000/assets?status=tokenized&sortBy=price"
```

### Get Asset Details
**Endpoint:** `GET /assets/:assetId`

**Description:** Get detailed information about a specific asset

**Response:**
```json
{
  "asset": {...},
  "salesHistory": [...],
  "totalSold": 1,
  "totalRevenue": 0.005
}
```

**Example:**
```bash
curl http://localhost:3000/assets/1234567890
```

## 3. Tokenization

### Tokenize Asset
**Endpoint:** `POST /tokenize/:assetId`

**Description:** Mint an ERC721 NFT for the asset

**Request Body:** None required (ERC721 tokens are unique)

**Response:**
```json
{
  "success": true,
  "tokenId": "1234567890",
  "transactionHash": "0x...",
  "supply": 1,
  "metadata": {...},
  "explorerUrl": "https://sepolia.etherscan.io/tx/0x...",
  "openseaUrl": "https://testnets.opensea.io/assets/sepolia/0x.../1234567890",
  "message": "🎉 Successfully tokenized \"Asset Name\" as unique ERC721 NFT!"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/tokenize/1234567890
```

## 4. Marketplace Operations

### Buy NFT
**Endpoint:** `POST /buy/:assetId`

**Description:** Purchase an ERC721 NFT (simulated for hackathon)

**Request Body:**
```json
{
  "buyer": "0x...", // Required
  "quantity": 1, // Optional, must be 1 for ERC721
  "paymentMethod": "crypto" // Optional
}
```

**Response:**
```json
{
  "success": true,
  "sale": {
    "id": "...",
    "assetId": "1234567890",
    "buyer": "0x...",
    "quantity": 1,
    "pricePerUnit": "0.001",
    "totalPrice": 0.001,
    "paymentMethod": "crypto",
    "timestamp": "2023-...",
    "txHash": "hackathon_tx_...",
    "status": "completed"
  },
  "asset": {
    "name": "Asset Name",
    "remainingSupply": 0,
    "totalSold": 1
  },
  "revenue": "0.001 ETH",
  "message": "🎉 Successfully purchased \"Asset Name\" for 0.001 ETH!",
  "tip": "In production, this would transfer actual NFTs to your wallet"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/buy/1234567890 \
  -H "Content-Type: application/json" \
  -d '{
    "buyer": "0x742d35Cc6322A6aC3FD5d5d8d8F2E4E3b4C5f8D7"
  }'
```

## 5. Sales & Analytics

### Get All Sales
**Endpoint:** `GET /sales`

**Description:** Retrieve sales history

**Query Parameters:**
- `buyer` - Filter by buyer address
- `limit` - Limit results (default: 50)

**Response:**
```json
{
  "sales": [...],
  "totalSales": 5,
  "totalRevenue": "0.025 ETH"
}
```

**Example:**
```bash
curl "http://localhost:3000/sales?limit=10"
```

### Get Sales by Buyer
**Endpoint:** `GET /sales/buyer/:address`

**Description:** Get all purchases by a specific buyer

**Response:**
```json
{
  "sales": [...],
  "buyerStats": {
    "totalPurchases": 2,
    "totalSpent": "0.01 ETH",
    "totalItems": 2
  }
}
```

**Example:**
```bash
curl http://localhost:3000/sales/buyer/0x742d35Cc6322A6aC3FD5d5d8d8F2E4E3b4C5f8D7
```

## 6. Search & Discovery

### Search Assets
**Endpoint:** `GET /search`

**Description:** Search and filter assets

**Query Parameters:**
- `q` - Search query (name/description)
- `priceMin` - Minimum price in ETH
- `priceMax` - Maximum price in ETH
- `status` - Filter by status

**Response:**
```json
{
  "results": [...],
  "count": 3,
  "query": {
    "q": "cool",
    "priceMin": "0.001",
    "priceMax": "0.01",
    "status": "tokenized"
  }
}
```

**Example:**
```bash
curl "http://localhost:3000/search?q=cool&priceMin=0.001&status=tokenized"
```

## 7. System Health & Info

### Health Check
**Endpoint:** `GET /health`

**Description:** Get marketplace status and statistics

**Response:**
```json
{
  "status": "🚀 Marketplace running!",
  "contractAddress": "0x...",
  "network": "Ethereum Sepolia Testnet",
  "stats": {
    "assetsCreated": 10,
    "assetsTokenized": 7,
    "totalSales": 5,
    "totalNFTsSold": 5,
    "totalRevenue": "0.025 ETH",
    "popularAsset": "Cool NFT"
  },
  "endpoints": {...},
  "tips": [...]
}
```

**Example:**
```bash
curl http://localhost:3000/health
```

### Gas Price Oracle
**Endpoint:** `GET /gas-price`

**Description:** Get current gas prices for optimization

**Response:**
```json
{
  "current": {
    "wei": "20000000000",
    "gwei": 20,
    "matic": 0.00042
  },
  "optimized": {
    "gwei": 18,
    "tip": "Use 10% lower gas price for non-urgent transactions"
  },
  "network": "Ethereum Sepolia Testnet",
  "recommendation": "Good time to transact"
}
```

**Example:**
```bash
curl http://localhost:3000/gas-price
```

## Quick Demo Flow

1. **Deploy Contract:**
   ```bash
   curl -X POST http://localhost:3000/deploy-contract
   ```

2. **Create Asset:**
   ```bash
   curl -X POST http://localhost:3000/assets \
     -H "Content-Type: application/json" \
     -d '{"name": "Demo NFT", "description": "Test NFT", "price": "0.001"}'
   ```

3. **Tokenize Asset:** (use the asset ID from step 2)
   ```bash
   curl -X POST http://localhost:3000/tokenize/1752333378421
   ```

4. **Buy NFT:**
   ```bash
   curl -X POST http://localhost:3000/buy/YOUR_ASSET_ID \
     -H "Content-Type: application/json" \
     -d '{"buyer": "0x742d35Cc6322A6aC3FD5d5d8d8F2E4E3b4C5f8D7"}'
   ```

5. **Check Status:**
   ```bash
   curl http://localhost:3000/health
   ```

## Notes

- All transactions are on **Ethereum Sepolia Testnet** (free!)
- Get free ETH from: https://sepoliafaucet.com/
- ERC721 tokens are unique - only 1 copy per asset
- Purchases are simulated for hackathon demo
- In production, real ETH transfers and NFT ownership would occur