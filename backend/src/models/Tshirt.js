// models/Tshirt.js

const mongoose = require('mongoose');

const TshirtSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['ordered', 'needed', 'distributed', 'returned', 'exchanged', 'left'],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Tshirt = mongoose.model('Tshirt', TshirtSchema);

module.exports = Tshirt;
