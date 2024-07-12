// src/routes/tshirtRoutes.js
const express = require('express');
const router = express.Router();
const { getTshirtTypes, getTshirtDistributed } = require('../controllers/tshirtController');

// Route to get all t-shirt types
router.get('/tshirt-types', getTshirtTypes);

// Route to get distributed t-shirts
router.get('/tshirt-distributed', getTshirtDistributed);


// Route to fetch T-shirt size data



// Route to fetch T-shirt size data


module.exports = router;