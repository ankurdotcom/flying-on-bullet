const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fleet-db';

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const vehicleRoutes = require('../backend/routes/vehicles'); 
app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
