import fs from 'fs';
import path from 'path';

const ASSETS_FILE = 'assets.json';
const SALES_FILE = 'sales.json';

// Load data from JSON files
export const loadAssets = () => {
  try {
    if (fs.existsSync(ASSETS_FILE)) {
      const data = fs.readFileSync(ASSETS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('⚠️ Could not load assets, starting fresh');
  }
  return [];
};

export const loadSales = () => {
  try {
    if (fs.existsSync(SALES_FILE)) {
      const data = fs.readFileSync(SALES_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('⚠️ Could not load sales, starting fresh');
  }
  return [];
};

// Save data to JSON files
export const saveAssets = (assets) => {
  try {
    fs.writeFileSync(ASSETS_FILE, JSON.stringify(assets, null, 2));
  } catch (error) {
    console.error('❌ Failed to save assets:', error);
  }
};

export const saveSales = (sales) => {
  try {
    fs.writeFileSync(SALES_FILE, JSON.stringify(sales, null, 2));
  } catch (error) {
    console.error('❌ Failed to save sales:', error);
  }
};