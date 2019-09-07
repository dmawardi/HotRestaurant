var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/reservations', function (req, res) {
    return res.json();
})

router.get('/waitlist', function (req, res) {
    return res.json();
})

module.exports = router;