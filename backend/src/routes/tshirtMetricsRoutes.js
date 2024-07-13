// tshirtMetricsRoutes.js
const express = require('express');
const router = express.Router();
const {
    getOrders,
    getNeeded,
    getDistributed,
    getReturned,
    getExchanged,
    getLeft
} = require('../controllers/tshirtMetricsController');

router.get('/orders', getOrders);
router.get('/needed', getNeeded);
router.get('/distributed', getDistributed);
router.get('/returned', getReturned);
router.get('/exchanged', getExchanged);
router.get('/left', getLeft);

module.exports = router;
