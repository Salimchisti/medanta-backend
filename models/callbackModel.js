const mongoose = require("mongoose");

const callbackRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Optional email validation
        return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  preferredTime: {
    type: String,
    enum: ["Morning", "Afternoon", "Evening", ""],
    default: "",
  },
  reason: {
    type: String,
    trim: true,
  },
  consent: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CallbackRequest = mongoose.model("CallbackRequest", callbackRequestSchema);

module.exports = CallbackRequest;
