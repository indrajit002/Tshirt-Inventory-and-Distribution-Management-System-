// sizeRoutes.js

const express = require('express');
const router = express.Router();
const tshirtSizeController = require('../controllers/tshirtSizeController');

router.get('/sizes', tshirtSizeController.getSizeData);

module.exports = router;
