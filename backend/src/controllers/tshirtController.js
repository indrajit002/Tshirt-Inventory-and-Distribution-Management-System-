// src/controllers/tshirtController.js

// Dummy data for T-shirt types
const tshirtTypes = [
    { _id: '1', name: 'Owl Coder T-shirts', quantity: 100 },
    { _id: '2', name: 'Project Space T-shirts', quantity: 150 },
    { _id: '3', name: 'Drive Ready T-shirts', quantity: 120 },
    { _id: '4', name: 'Ignite Coder T-shirts', quantity: 90 },
    { _id: '5', name: 'Interns T-shirts', quantity: 60 },
    { _id: '6', name: 'Staff T-shirts', quantity: 30 },
    { _id: '7', name: 'Forensic T-shirts', quantity: 70 }
];

// Dummy data for distributed T-shirts
const tshirtDistributed = [
    { _id: '1', name: 'Owl Coder T-shirts', quantity: 80 },
    { _id: '2', name: 'Project Space T-shirts', quantity: 130 },
    { _id: '3', name: 'Drive Ready T-shirts', quantity: 100 },
    { _id: '4', name: 'Ignite Coder T-shirts', quantity: 70 },
    { _id: '5', name: 'Interns T-shirts', quantity: 50 },
    { _id: '6', name: 'Staff T-shirts', quantity: 20 },
    { _id: '7', name: 'Forensic T-shirts', quantity: 60 }
];

// Controller function to handle fetching T-shirt types
const getTshirtTypes = (req, res) => {
    res.json(tshirtTypes);
};

// Controller function to handle fetching distributed T-shirt data
const getTshirtDistributed = (req, res) => {
    res.json(tshirtDistributed);
};

module.exports = {
    getTshirtTypes,
    getTshirtDistributed
};
