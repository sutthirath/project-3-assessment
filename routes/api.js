var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
    request('https://jsonplaceholder.typicode.com/posts', {json: true},
        function(err, response, body) {
            res.render('posts', {posts: body});
        }
    );
});

module.exports = router;