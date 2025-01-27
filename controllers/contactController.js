const Contact = require("../models/contactModel");

// Handle GET request to fetch all messages
const getContact = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Handle POST request to create a new message
const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = await Contact.create({ name, email, message });
    res.status(200).json({
      message: "Message sent!",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getContact, createContact };
