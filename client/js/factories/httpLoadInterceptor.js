
/*global angular */
'use strict';

angular
    .module('HttpLoadInterceptor', [])
    .factory('httpLoadInterceptor', ['$q', function ($q) {

        var observerCallback,
            numLoadings = 0,
            notifyObservers = function () {
                if (observerCallback) {
                    observerCallback(numLoadings);
                }
            };

        return {
            registerObserverCallback: function (callback) {
                observerCallback = callback;
            },

            request: function (config) {

                numLoadings += 1;
                notifyObservers();
                return config || $q.when(config);

            },
            response: function (response) {

                numLoadings -= 1;
                notifyObservers();
                return response || $q.when(response);

            },
            responseError: function (response) {

                numLoadings -= 1;
                notifyObservers();
                return $q.reject(response);
            }
        };
    }]);

