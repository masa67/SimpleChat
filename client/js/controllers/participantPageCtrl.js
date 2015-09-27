
/*global angular */
'use strict';

angular
    .module('ParticipantPage', [])
    .controller('ParticipantPageController',
        ['$scope', '$location', 'user', function ($scope, $location, user) {

            $scope.model = {
                username: user.username,
                clickLogout: function () {
                    user.logout().then(function () {
                        $scope.model.username = user.username;
                    });
                }
            };

            if ($scope.model.username === undefined) {
                user.immediateLogin().then(function () {
                    $scope.model.username = user.username;
                    if ($scope.model.username !== undefined) {
                        $location.path('/host');
                    }
                });
            }
        }]);