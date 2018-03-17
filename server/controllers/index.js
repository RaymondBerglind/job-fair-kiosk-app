var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.use('/signup', require('./signup'));

module.exports = router;