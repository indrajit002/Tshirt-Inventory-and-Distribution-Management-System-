// src/routes/genderRoutes.js
const express = require('express');
const router = express.Router();

// Dummy data for testing
const genderData = {
    maleCount: 150,
    femaleCount: 100
};

// Route to get gender distribution data
router.get('/gender-count', (req, res) => {
    res.json(genderData);
});

module.exports = router;
