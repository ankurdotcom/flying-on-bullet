const express = require('express');
const Vehicle = require('./models/vehicle'); // MongoDB model
const router = express.Router();

router.get('/api/vehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.find(); // Fetch all vehicles
        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch vehicles' });
    }
});

module.exports = router;
