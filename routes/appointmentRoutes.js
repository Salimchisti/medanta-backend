const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const router = express.Router();

// Middleware to handle JSON data and CORS
// router.use(cors());
// router.use(bodyParser.json());

// POST route to create a new appointment
router.post('/', createAppointment);

// GET route to fetch all appointments
router.get('/', getAppointments);

module.exports = router;
