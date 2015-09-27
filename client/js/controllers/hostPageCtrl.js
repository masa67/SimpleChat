
/*global angular */
'use strict';

angular
    .module('HostPage', [])
    .controller('HostPageController',
        ['$scope', '$location', 'user', function ($scope, $location, user) {

            $scope.model = {
                username: user.username,
                clickLogout: function () {
                    user.logout().then(function () {
                        $location.path('/');
                    });
                }
            };
        }]);