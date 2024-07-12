const express = require('express');
const router = express.Router();
const { getTshirtDataBySizes } = require('../controllers/tshirtSizeDataController');

router.get('/tshirtDataBySizes', getTshirtDataBySizes);

module.exports = router;
