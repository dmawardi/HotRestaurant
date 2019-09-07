var express = require('express');
var router = express.Router();
var path = require('path');
var wait = require('../data/waitingList');
var reserve = require('../data/reservationList');


router.get('/reservations', function (req, res) {
    return res.json(reserve);
})

router.get('/waitlist', function (req, res) {
    return res.json(wait);
})

module.exports = router;