
/*global angular */
'use strict';

angular
    .module('UserService', [])
    .factory('user', ['$resource', '$q', function ($resource, $q) {

        return {
            username: undefined,
            immediateLogin: function() {
                var d = $q.defer(), that = this;

                $resource('/user').get(function(data) {
                    that.username = data.username;
                    d.resolve();
                });

                return d.promise;
            },
            login: function (userdata) {
                var d = $q.defer(), that = this;

                $resource('/user/login').save(userdata,
                    function () {
                        that.username = userdata.username;
                        d.resolve();
                    },
                    function (err) {
                        d.reject(err);
                    });

                return d.promise;
            },
            logout: function () {
                var d = $q.defer(), that = this;

                $resource('/user/logout').get(
                    function () {
                        that.username = undefined;
                        d.resolve();
                    },
                    function (err) {
                        d.reject(err);
                    }
                );

                return d.promise;
            }
        };
    }]);
