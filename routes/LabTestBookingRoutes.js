const express = require('express');
const { createBooking, getAllBookings } = require('../controllers/LabTestBookingController');

const router = express.Router();

// Route to create a new booking
router.post('/bookings', createBooking);

// Route to fetch all bookings (optional for an admin dashboard)
router.get('/bookings', getAllBookings);

module.exports = router;
