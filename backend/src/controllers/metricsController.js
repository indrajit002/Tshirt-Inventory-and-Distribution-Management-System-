const Metrics = require('../models/Metrics');

// Controller methods
module.exports = {
    // Create a metric
    createMetric: async (req, res) => {
        try {
            const { metricType, quantity } = req.body;
            const newMetric = new Metrics({ metricType, quantity });
            await newMetric.save();
            res.status(201).json(newMetric);
        } catch (err) {
            console.error('Error creating metric:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all metrics
    getAllMetrics: async (req, res) => {
        try {
            const metrics = await Metrics.find();
            res.json(metrics);
        } catch (err) {
            console.error('Error getting metrics:', err);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Add fake data for all metrics
    addFakeMetricsData: async () => {
        try {
            await Metrics.deleteMany(); // Clear existing data
            const fakeMetrics = [
                { metricType: 'Tshirt Orders', quantity: 100 },
                { metricType: 'Tshirt Needed', quantity: 50 },
                { metricType: 'Tshirt Distributed', quantity: 80 },
                { metricType: 'Tshirt Returned', quantity: 20 },
                { metricType: 'Tshirt Exchanged', quantity: 10 },
                { metricType: 'Tshirt Left', quantity: 40 }
                // Add more fake data as needed
            ];
            await Metrics.create(fakeMetrics);
            console.log('Fake metrics data added successfully.');
        } catch (err) {
            console.error('Error adding fake metrics data:', err);
        }
    }
};
