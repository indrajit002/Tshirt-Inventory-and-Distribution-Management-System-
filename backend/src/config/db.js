const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Function to connect to MongoDB and return a connection
const connectToDatabase = () => {
  const uri = process.env.MONGODB_URI;
  return mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Function to initiate connection to the main MongoDB database
const initiateMainDatabase = () => {
  const uri = process.env.MONGODB_URI;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to Main MongoDB');
  }).catch((err) => {
    console.error('Failed to connect to Main MongoDB', err);
    process.exit(1);
  });
};

module.exports = { connectToDatabase, initiateMainDatabase };
