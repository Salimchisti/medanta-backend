const express = require('express');
const { storeCallback } = require('../controllers/callbackController');
const router = express.Router();

// Define the routes
router.post('/', storeCallback);  // POST: Create a new message

module.exports = router;
