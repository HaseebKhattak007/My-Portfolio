const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const path = require('path');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folders
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/files', express.static(path.join(__dirname, 'files')));

// Download Resume Route
app.get('/api/download-resume', (req, res) => {
    const file = path.join(__dirname, 'files', 'resume.pdf');
    res.download(file);
});

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));

// Root endpoint
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
