var express = require('express');
var api = require("./app/routing/apiRouting")
var html = require('./app/routing/htmlRouting')


// INitialise Express Server under app variable
var app = express();
var PORT = 3000;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing Declarations (See apiRouting and htmlRouting)
app.use('/api', api);
app.use('/', html);

// Activate listener
app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
});