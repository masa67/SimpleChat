
'use strict';

var express = require('express');
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');

var users = require('./routes/user');
var chat = require('./routes/chat');

var app = express();
var server = require('http').Server(app);

chat.initChat(server);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());

/*jslint nomen: true*/
app.use('/', express.static(path.join(__dirname, '../client/views')));
app.use('/css', express.static(path.join(__dirname, '../client/css')));
app.use('/js', express.static(path.join(__dirname, '../client/js')));
app.use('/vendor', express.static(path.join(__dirname, '../bower_components')));
app.use('/vendor2', express.static(path.join(__dirname, '../node_modules')));

app.use('/user', users);

/*jslint unparam: true */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

server.listen(3001);
