const express = require('express');
const router = express.Router();
const { bookings, orders } = require('../models/hotel');

router.post('/book', (req, res) => {
    const { name, room, checkin, checkout } = req.body;
    bookings.push({ name, room, checkin, checkout });
    res.json({ message: 'Booking Successful!' });
});

router.post('/order', (req, res) => {
    const { roomNumber, item } = req.body;
    orders.push({ roomNumber, item });
    res.json({ message: 'Order Successful!' });
});

module.exports = router;
