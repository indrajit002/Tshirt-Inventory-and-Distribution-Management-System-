// controllers/tshirtMetricsController.js

const Tshirt = require('../models/Tshirt');

// Function to generate random number within a range
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getTshirtOrdered = async (req, res) => {
    try {
        const tshirts = await Tshirt.find({ status: 'ordered' });
        res.json(tshirts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTshirtNeeded = async (req, res) => {
    try {
        const tshirts = await Tshirt.find({ status: 'needed' });
        res.json(tshirts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTshirtDistributed = async (req, res) => {
    try {
        const tshirts = await Tshirt.find({ status: 'distributed' });
        res.json(tshirts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTshirtReturned = async (req, res) => {
    try {
        const tshirts = await Tshirt.find({ status: 'returned' });
        res.json(tshirts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTshirtExchanged = async (req, res) => {
    try {
        const tshirts = await Tshirt.find({ status: 'exchanged' });
        res.json(tshirts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTshirtLeft = async (req, res) => {
    try {
        const tshirts = await Tshirt.find({ status: 'left' });
        res.json(tshirts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const generateFakeData = async (req, res) => {
    try {
        const statuses = ['ordered', 'needed', 'distributed', 'returned', 'exchanged', 'left'];
        const fakeData = [];

        // Generate fake data for each status
        for (let status of statuses) {
            const quantity = getRandomNumber(10, 50); // Adjust range as needed
            fakeData.push({ status, quantity });

            // Save to MongoDB (optional)
            const tshirt = new Tshirt({ status, quantity });
            await tshirt.save();
        }

        res.json({ message: 'Fake data generated successfully!', data: fakeData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTshirtOrdered,
    getTshirtNeeded,
    getTshirtDistributed,
    getTshirtReturned,
    getTshirtExchanged,
    getTshirtLeft,
    generateFakeData
};
