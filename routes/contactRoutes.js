const express = require("express");
const {
  getContact,
  createContact,
} = require("../controllers/contactController");
const router = express.Router();

// Define the routes
router.get("/", getContact); // GET: Fetch all messages
router.post("/", createContact); // POST: Create a new message

module.exports = router;
