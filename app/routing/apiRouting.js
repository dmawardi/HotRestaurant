var express = require('express');
var router = express.Router();

// THIS FILE SERVES DATA (this is why we are calling data tables)
var wait = require('../data/waitingList');
var reserve = require('../data/reservationList');


// Get calls to supply information as a JSON file
router.get('/reservations', function (req, res) {
    res.json(reserve);
});

router.get('/waitlist', function (req, res) {
    res.json(wait);
});


// Posting information from reservations.html form into the Reservations and Waitlist tables
router.post('/makeReservations', function (req, res) {
    // Reserve list is capped at 5, after this is reached it overflows to the waitlist
    if (reserve.length < 5) {
        reserve.push(req.body)
    } else {
        // Hello, I am the wait list
        wait.push(req.body)
    }
})

// Export the module for use in the server
module.exports = router;