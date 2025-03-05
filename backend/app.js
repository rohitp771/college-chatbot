const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/enquiries', require('./routes/enquiryRoutes'));
app.use('/api/feedbacks',require("./routes/feedbackRoutes"))

// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
