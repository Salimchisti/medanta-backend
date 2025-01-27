const express = require('express');
const router = express.Router();
const { createDoctorAppointment, getDoctorAppointments } = require('../controllers/doctorAppointmentControllers');

// POST route to create a new doctor appointment
router.post('/', createDoctorAppointment);

// GET route to fetch all doctor appointments (optional)
router.get('/', getDoctorAppointments);

module.exports = router;
