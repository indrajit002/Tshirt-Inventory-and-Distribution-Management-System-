const express = require('express');
const Router = express.Router();
const BulkemailSender = require('../Mailing-system/bulk-email-sender');
const UserController = require('../controllers/UserController');

// User Routes
Router.post('/api/add-user', UserController.addUser); // Endpoint to add a new user
Router.post("/api/bulk-sender", BulkemailSender.BulkEmailSender); // Endpoint to send bulk emails

module.exports = Router;
