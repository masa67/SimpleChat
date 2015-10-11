
'use strict';

var express = require('express');
var ws = require('nodejs-websocket');

var router = express.Router();

var chats = [];

function activateHost(username, duration) {
    var i, expire = new Date().getTime() + duration;

    for (i = 0; i < chats.length; i += 1) {
        if (chats[i].username === username) {
            chats[i].expire = expire;
            return;
        }
    }
    chats.push({
        username: username,
        expire: expire
    });
}

function deactivateHost(username) {
    var i;

    for (i = 0; i < chats.length; i += 1) {
        if (chats[i].username === username) {
            chats.splice(i, 1);
            return;
        }
    }
}

/*jslint unparam: true */
router.get('/', function (req, res) {
    res.send({ chats: chats });
});

/*
var server = ws.createServer(function (conn) {
    conn.on('text', function (str) {

    });
}).listen(3002);
*/

module.exports = {
    router: router,
    activateHost: activateHost,
    deactivateHost: deactivateHost
};