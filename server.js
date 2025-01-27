const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const callbackRoutes = require('./routes/callbackRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes'); 
const doctorAppointmentRoutes = require('./routes/doctorAppointmentRoutes'); 


dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  
    methods: ['GET', 'POST'],
    credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/callback', callbackRoutes);
app.use('/api/appointment', appointmentRoutes); 
app.use('/api/doctorappointments', doctorAppointmentRoutes);  

// Set the port to use, defaulting to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
