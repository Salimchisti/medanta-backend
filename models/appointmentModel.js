const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    aadhar: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
