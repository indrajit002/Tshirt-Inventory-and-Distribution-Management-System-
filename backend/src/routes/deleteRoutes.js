// deleteRoutes.js

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Endpoint to delete all data
router.delete('/delete-all-data', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(process.env.Database_Name); // Use DB_NAME from .env
    const collection = database.collection(process.env.Collection_Name); // Use COLLECTION_NAME from .env

    // Perform deletion operation
    const result = await collection.deleteMany({});

    res.status(200).json({ message: 'All data deleted successfully!' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ message: 'Failed to delete all data' });
  } finally {
    await client.close();
  }
});

module.exports = router;
