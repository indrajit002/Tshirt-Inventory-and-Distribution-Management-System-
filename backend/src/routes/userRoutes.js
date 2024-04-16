const express = require('express');
const Router = express.Router();

const BulkemailSender = require('../Mailing-system/bulk-email-sender')

const UserController = require('../controllers/UserController')
// const BulkEmailSender=require('../Mailing-system/bulk-email-sender')

//User Routes

Router.post('/api/add-user',UserController.addUser);
// Router.post('/api/user-email',BulkEmailSender)
Router.post("/api/bulk-sender", BulkemailSender.BulkEmailSender);

module.exports = Router;
        