
'use strict';

var express = require('express');
var socket = require('socket.io');

var chats = [], io, sockets = [], emitChats;

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

    emitChats();
}

function deactivateHost(username) {
    var i;

    for (i = 0; i < chats.length; i += 1) {
        if (chats[i].username === username) {
            chats.splice(i, 1);
            break;
        }
    }

    emitChats();
}

var emitChats = function (socket) {
    var i;

    if (socket) {
        socket.emit('chats', {chats: chats});
    } else {
        for (i = 0; i < sockets.length; i += 1) {
            sockets[i].emit('chats', {chats: chats});
        }
    }
};

function initChat(server) {
    io = require('socket.io')(server);

    io.on('connection', function (socket) {
        sockets.push(socket);
        emitChats(socket);
    });
}

module.exports = {
    initChat: initChat,
    activateHost: activateHost,
    deactivateHost: deactivateHost
};