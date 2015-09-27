
'use strict';

var express = require('express');
var router = express.Router();

var hour = 3600000;

var userList = [
    {
        username: 'a',
        password: 'a'
    }
];


function findUser(username) {
    var i;

    for (i = 0; i < userList.length; i += 1) {
        if (userList[i].username === username) {
            return userList[i];
        }
    }
    return undefined;
}

router.get('/', function (req, res) {
    if (req.session.username) {
        var u = findUser(req.session.username);
        if (u) {
            res.send({
                username: req.session.username
            });
            return;
        }
    }
    res.sendStatus(401);
});

router.post('/', function (req, res) {
    if (!findUser(req.body.username)) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

router.post('/login', function (req, res) {
    // Use timeout to demonstrate a delay...
    setTimeout(function () {
        var u = findUser(req.body.username);
        if (u && u.password === req.body.password) {
            req.session.username = req.body.username;
            req.session.cookie.maxAge = hour;
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    }, 1000);
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.sendStatus(200);
});

module.exports = router;
