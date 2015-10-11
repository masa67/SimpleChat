
/*global angular, io */
'use strict';

angular
    .module('ChatService', [])
    .factory('chat', [function () {

        return {
            connect: function (client) {
                var socket = io.connect('http://localhost:3001');
                socket.on('chats', function (data) {
                    client.onChats(data);
                });
            }
        };
    }]);
