const Appointment = require('../models/appointmentModel');

// Create a new appointment
const createAppointment = async (req, res) => {
  const { name, email, aadhar, address, gender, reason, date, time, dateOfBirth } = req.body;
  
  try {
    console.log("Received Appointment Data:", req.body);

    const newAppointment = new Appointment({
      name,
      email,
      aadhar,
      address,
      gender,
      reason,
      date: new Date(date), // Ensure date is converted to Date
      time,
      dateOfBirth: new Date(dateOfBirth), // Ensure DOB is converted to Date
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!', appointment: newAppointment });
  } catch (err) {
    console.error("Error booking appointment:", err);
    res.status(500).json({ message: 'Error booking appointment', error: err.message });
  }
};

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err });
  }
};

module.exports = { createAppointment, getAppointments };
