
/*global angular */
'use strict';

angular
    .module('ChatService', [])
    .factory('chat', ['$resource', function ($resource) {

        return {
            list: function () {
                return $resource('/chat').get();
            }
        };
    }]);
