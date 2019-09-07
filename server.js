var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing code goes here
app.get('/', function (res, req) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get('/reservations', function (res, req) {
    res.sendFile(path.join(__dirname, "reservations.html"))
});

app.get('/reservationsView', function (res, req) {
    res.sendFile(path.join(__dirname, "reservationsView.html"))
});

app.get('/api/reservations', function (res, req) {
    return res.json();
})

app.get('/api/waitlist', function (res, req) {
    return res.json();
})

app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
});