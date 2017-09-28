var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var object = {
        title : {
            value1 : "test123",
            value2 : "test2"
        }
    }
    res.render('index', object);
});

module.exports = router;
