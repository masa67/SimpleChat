
/*global angular */
'use strict';

var SimpleChatApp = angular
    .module('SimpleChatApp', [
        'ngRoute',
        'ngResource',
        'appRoutes',
        'angularSpinner',
        'rcForm',
        'ChatService',
        'HttpLoadInterceptor',
        'UserService',
        'ParticipantPage',
        'LoginPage',
        'HostPage'
    ])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpLoadInterceptor');
    }]);
