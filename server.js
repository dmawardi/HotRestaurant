var express = require('express');
var fs = require('fs');
var path = require('path');

var data = require("./app/data/data.js");
var waitList = data.waitList;
var reservations = data.reservations;

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing code goes here




app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
});