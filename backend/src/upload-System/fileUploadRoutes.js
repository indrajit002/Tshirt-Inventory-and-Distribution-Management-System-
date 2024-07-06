const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");
const { MongoClient } = require("mongodb");
const express = require("express");

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filenames
  },
});

const upload = multer({ storage: storage });

// MongoDB connection details
const mongoURL = process.env.MONGODB_URI;
const dbName = "pROJECT_sPACE";
const collectionName = "Testing02";

// Upload CSV route
router.post("/upload-csv", upload.single("file"), async (req, res) => {
  try {
    console.log("File upload request received");
    console.log("Uploaded file:", req.file);

    // Check if file was uploaded
    if (!req.file) {
      console.log("No file uploaded");
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Check if uploaded file is a CSV
    if (!req.file.originalname.endsWith(".csv")) {
      console.log("Not a CSV file");
      // Delete the invalid file from disk
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "Please upload a CSV file." });
    }

    console.log("File saved to disk:", req.file.path);

    // Connect to MongoDB
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        try {
          console.log("Inserting data into MongoDB", results);
          await collection.insertMany(results);
          res.status(200).json({ message: "File uploaded and data saved to database" });
        } catch (error) {
          console.error("Error inserting data into database:", error);
          res.status(500).json({ message: "Failed to save data to database" });
        } finally {
          await client.close(); // Close MongoDB client connection
          // Optionally, keep the uploaded file on disk after processing
        }
      })
      .on("error", (error) => {
        console.error("Error parsing CSV file:", error);
        res.status(500).json({ message: "Failed to parse CSV file" });
      });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Failed to upload file" });
  }
});

module.exports = router;
