var express = require('express')
var app = express.Router();

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
});

module.exports = app;