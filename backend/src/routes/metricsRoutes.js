const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');

// Routes for metrics APIs
router.post('/metrics', metricsController.createMetric);
router.get('/metrics', metricsController.getAllMetrics);

module.exports = router;
