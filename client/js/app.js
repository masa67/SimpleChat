
/*global angular */
'use strict';

var SimpleChatApp = angular
    .module('SimpleChatApp', [
        'ngRoute',
        'ngResource',
        'appRoutes',
        'angularSpinner',
        'rcForm',
        'HttpLoadInterceptor',
        'UserService',
        'MainPage',
        'LoginPage'
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('httpLoadInterceptor');
    }]);
