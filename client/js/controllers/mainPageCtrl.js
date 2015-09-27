
/*global angular */
'use strict';

angular
    .module('MainPage', [])
    .controller('MainPageController',
        ['$scope', 'user', function ($scope, user) {

            $scope.model = {
                username: user.username,
                clickLogout: function () {
                    user.logout().then(function () {
                        $scope.model.username = user.username;
                    });
                }
            };

            if (!$scope.model.username) {
                user.immediateLogin().then(function() {
                    $scope.model.username = user.username;
                });
            }
        }]);