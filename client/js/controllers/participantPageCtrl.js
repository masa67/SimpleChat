
/*global angular */
'use strict';

angular
    .module('ParticipantPage', [])
    .controller('ParticipantPageController',
        ['$scope', '$location', 'user', 'chat', function ($scope, $location, user, chat) {

            $scope.model = {
                chats: undefined
            };

            user.immediateLogin().then(function () {
                if (user.username !== undefined && user.username !== '') {
                    $location.path('/host');
                }
            });

            chat.list().$promise.then(function (data) {
                $scope.model.chats = data.chats;
            });
        }]);