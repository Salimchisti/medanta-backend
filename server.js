const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const callbackRoutes = require('./routes/callbackRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const doctorAppointmentRoutes = require('./routes/doctorAppointmentRoutes');
const labTestBookingRoutes = require('./routes/LabTestBookingRoutes');

dotenv.config();

connectDB();

const app = express();

// CORS Setup: Allow multiple origins or specific origin
const allowedOrigins = ['http://localhost:3000']; // Correct port for frontend

app.use(cors({
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            // Allow requests with no origin (e.g., mobile apps)
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow credentials (cookies, authentication)
}));

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/callback', callbackRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/doctorappointments', doctorAppointmentRoutes);
app.use('/api/labtest', labTestBookingRoutes);

// Set the port to use, defaulting to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
