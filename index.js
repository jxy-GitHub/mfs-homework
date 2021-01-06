var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/signin', function(req, res, next) {
    res.header({ 'Access-Control-Allow-Method': '*' });
    res.header({ 'Access-Control-Allow-Origin': '*' });

    var username = req.body.username;
    console.log(username);
    if (username == 'mafengshe') {
        res.json({ errno: 1, errmsg: '用户名已存在', data: {} });
    } else {
        res.json({ errno: 0, errmsg: '', data: {} });
    }
});

module.exports = router;