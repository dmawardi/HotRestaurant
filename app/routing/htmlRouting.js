var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservations.html"))
});

router.get('/reservationView', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservationView.html"))
});

module.exports = router;