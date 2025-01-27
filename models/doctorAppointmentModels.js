const mongoose = require('mongoose');

// Define the schema for a doctor appointment
const doctorAppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String, default: '' }, // Optional message for the doctor
}, { timestamps: true });

module.exports = mongoose.model('DoctorAppointment', doctorAppointmentSchema);
