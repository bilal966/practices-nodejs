var express = require('express')
var app = express.Router();

// GET method route
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
});

module.exports = app;