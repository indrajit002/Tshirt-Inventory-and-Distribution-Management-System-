// routes/tshirtMetricsRoutes.js

const express = require('express');
const router = express.Router();
const tshirtMetricsController = require('../controllers/tshirtMetricsController');

router.get('/orders', tshirtMetricsController.getTshirtOrdered);
router.get('/needed', tshirtMetricsController.getTshirtNeeded);
router.get('/distributed', tshirtMetricsController.getTshirtDistributed);
router.get('/returned', tshirtMetricsController.getTshirtReturned);
router.get('/exchanged', tshirtMetricsController.getTshirtExchanged);
router.get('/left', tshirtMetricsController.getTshirtLeft);

// Endpoint to generate fake data (for testing purposes)
router.post('/generateFakeData', tshirtMetricsController.generateFakeData);

module.exports = router;
