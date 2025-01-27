const CallbackRequest = require('../models/callbackModel');

// Handle POST request to create a new callback request
const storeCallback = async (req, res) => {
  try {
    console.log('Received data:', req.body);  // Debugging statement

    const { name, phone, email, preferredTime, reason, consent } = req.body;

    // Validate required fields
    if (!name || !phone || consent === undefined) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    // Save data to MongoDB
    const callbackRequest = new CallbackRequest({
      name,
      phone,
      email,
      preferredTime,
      reason,
      consent,
    });

    const savedData = await callbackRequest.save();

    res.status(200).json({
      message: "Callback request saved successfully",
      data: savedData,
    });
  } catch (error) {
    console.error('Error saving callback request:', error);
    res.status(500).json({
      message: "Error saving callback request",
      error: error.message,
    });
  }
};

module.exports = { storeCallback };
