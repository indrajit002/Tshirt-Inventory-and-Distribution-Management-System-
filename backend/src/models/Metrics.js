const mongoose = require('mongoose');

const MetricsSchema = new mongoose.Schema({
    metricType: { type: String, required: true },
    quantity: { type: Number, default: 0 }
});

module.exports = mongoose.model('Metrics', MetricsSchema);
