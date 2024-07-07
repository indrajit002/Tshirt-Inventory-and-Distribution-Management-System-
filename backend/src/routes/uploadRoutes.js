// src/routes/uploadRoutes.js
const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const uri = process.env.MONGODB_URI; // Using environment variable for MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.post("/upload-csv", upload.single("file"), async (req, res) => {
  const filePath = path.join(__dirname, "../../", req.file.path);
  
  let results = [];
  
  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db(process.env.Database_Name); // Replace with your database name
    const collection = database.collection(process.env.Collection_Name); // Replace with your collection name
    
    // Read and parse CSV file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        try {
          // Insert data into MongoDB
          const insertResult = await collection.insertMany(results);
          console.log("Inserted documents =>", insertResult);

          // Remove the file after successful insertion
          fs.unlinkSync(filePath);
          
          res.status(200).send({ message: "File uploaded and data inserted successfully!" });
        } catch (err) {
          console.error("Error inserting data into MongoDB:", err);
          res.status(500).send({ message: "Failed to insert data into MongoDB." });
        }
      });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    res.status(500).send({ message: "Failed to connect to MongoDB." });
  }
});

module.exports = router;
