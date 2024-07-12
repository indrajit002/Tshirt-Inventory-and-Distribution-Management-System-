// datesRoutes.js

const express = require('express');
const router = express.Router();
const { getDatesData } = require('../controllers/datesController');

router.get('/datesData', getDatesData);

module.exports = router;
