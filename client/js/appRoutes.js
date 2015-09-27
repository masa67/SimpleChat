
/*global angular */
'use strict';

angular
    .module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'participant.html',
                    controller: 'ParticipantPageController'
                })
                .when('/login', {
                    templateUrl: 'login.html',
                    controller: 'LoginPageController'
                })
                .when('/host', {
                    templateUrl: 'host.html',
                    controller: 'HostPageController'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);

        }]
)
