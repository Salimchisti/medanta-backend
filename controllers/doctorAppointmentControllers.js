const DoctorAppointment = require('../models/doctorAppointmentModels');

// Controller function to create a new doctor appointment
const createDoctorAppointment = async (req, res) => {
  try {
    const { name, email, phone, department, date, time, message } = req.body;

    // Create a new doctor appointment document
    const newAppointment = new DoctorAppointment({
      name,
      email,
      phone,
      department,
      date,
      time,
      message,
    });

    // Save the appointment to the database
    await newAppointment.save();

    // Return a success message
    res.status(201).json({ message: 'Appointment booked successfully!', data: newAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while booking appointment' });
  }
};

// Controller function to get all doctor appointments (optional)
const getDoctorAppointments = async (req, res) => {
  try {
    const appointments = await DoctorAppointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while fetching appointments' });
  }
};

module.exports = {
  createDoctorAppointment,
  getDoctorAppointments,
};
