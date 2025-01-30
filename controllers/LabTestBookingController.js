const LabTestBooking = require('../models/LabTestBooking');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { name, email, phone, labTest, date, time, message } = req.body;
    const newBooking = new LabTestBooking({
      name,
      email,
      phone,
      labTest,
      date,
      time,
      message,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Lab Test appointment booked successfully!', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error while booking lab test', error: error.message });
  }
};

// Get all bookings (optional for admin view)
const getAllBookings = async (req, res) => {
  try {
    const bookings = await LabTestBooking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
};
