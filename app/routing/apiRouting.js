var express = require('express');
var router = express.Router();
var path = require('path');
var wait = require('../data/waitingList');
var reserve = require('../data/reservationList');

// Get calls to supply information as a JSON file
router.get('/reservations', function (req, res) {
    return res.json(reserve);
})

router.get('/waitlist', function (req, res) {
    return res.json(wait);
})


// Posting information from reservations.html form into the Reservations and Waitlist tables
router.post('/makeReservations', function (req, res) {
    if (reserve.length < 5) {
        reserve.push(req.body)
    } else {
        wait.push(req.body)
    }
})

// Export the module for use in the HTML
module.exports = router;