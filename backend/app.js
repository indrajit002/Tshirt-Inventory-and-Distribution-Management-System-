// app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const InitiateMongoServer = require("./src/config/db");
const UserRouter = require("./src/routes/userRoutes"); // Import userRoutes.js
const UploadRouter = require("./src/routes/uploadRoutes"); // Import uploadRoutes.js
const DeleteRouter = require("./src/routes/deleteRoutes"); // Import deleteRoutes.js
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB Atlas URI
const MONGOURI = process.env.MONGODB_URI;

// Initialize MongoDB Server
InitiateMongoServer(MONGOURI);

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust based on your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API is Working" });
});

// Mount UserRouter at root path
app.use("/", UserRouter);

// Mount UploadRouter at /api path
app.use("/api", UploadRouter);

// Mount DeleteRouter at /api path for delete operations
app.use("/api", DeleteRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
