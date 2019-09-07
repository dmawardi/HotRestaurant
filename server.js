var express = require('express');
var api = require("./app/routing/apiRouting")
var html = require('./app/routing/htmlRouting')
var path = require('path');


// INitialise Express Server under app variable
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, 'app/public')))

// Routing Declarations (See apiRouting and htmlRouting)
app.use('/api', api);
app.use('/', html);

// Activate listener
app.listen(PORT, function () {
    console.log("Listening on port " + PORT)
});