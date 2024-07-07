// userRoutes.js
const express = require('express');
const Router = express.Router();
const BulkemailSender = require('../Mailing-system/bulk-email-sender');
const UserController = require('../controllers/UserController');
// const fileUploader = require('../upload-System/fileUploader'); // Import fileUploader route

// User Routes
Router.post('/api/add-user', UserController.addUser); // Endpoint to add a new user
Router.post("/api/bulk-sender", BulkemailSender.BulkEmailSender); // Endpoint to send bulk emails

// Mount fileUploader routes under /api
// Router.use("/api", fileUploader);


module.exports = Router;
