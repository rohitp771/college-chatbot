const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
// Connect to database
connectDB();

// Middleware
app.use(express.json());
const externalFolderPath = path.resolve(__dirname, '../frontend3');
app.use(express.static(externalFolderPath));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/enquiries', require('./routes/enquiryRoutes'));
app.use('/api/feedbacks',require("./routes/feedbackRoutes"));
app.use('/api/chat',require("./routes/chatRoutes"));

// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
