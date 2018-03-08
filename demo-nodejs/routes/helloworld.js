var express = require('express')
var app = express.Router();

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res,next) {
    res.send('hello world')
});
module.exports = app;

/* GET home page.
router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Express'});
});

module.exports = router;
*/