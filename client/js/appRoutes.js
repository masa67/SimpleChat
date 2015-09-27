
/*global angular */
'use strict';

angular
    .module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'main.html',
                    controller: 'MainPageController'
                })
                .when('/login', {
                    templateUrl: 'login.html',
                    controller: 'LoginPageController'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);

        }]
)
