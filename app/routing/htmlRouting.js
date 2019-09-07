var express = require('express');
var router = express.Router();
var path = require('path');

// THIS FILE SERVES HTML PAGES (no data tables required here)

// Get handlers
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservations.html"))
});

// router.get('/reservationView', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/reservationView.html"))
// });

// Below is how you would import a single file. Replaced by static middle ware (server.js line: 14)
// router.get('/logic.js', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/logic.js"))
// });

module.exports = router;