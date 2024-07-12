const express = require('express');
const router = express.Router();
const TshirtMetrics = require('../models/TshirtMetrics');

// Get all metrics
router.get('/', async (req, res) => {
    try {
        const metrics = await TshirtMetrics.find();
        res.json(metrics);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Add a new metric
router.post('/', async (req, res) => {
    const { metricType, quantity } = req.body;

    try {
        const newMetric = new TshirtMetrics({
            metricType,
            quantity
        });

        await newMetric.save();
        res.json(newMetric);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
