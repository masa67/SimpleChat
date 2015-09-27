
/*global angular */
'use strict';

angular
    .module('LoginPage', [])
    .controller('LoginPageController',
        [   '$scope',
            '$rootScope',
            '$location',
            'httpLoadInterceptor',
            'usSpinnerService',
            'user',
            function (
                $scope,
                $rootScope,
                $location,
                httpLoadInterceptor,
                usSpinnerService,
                user
            ) {
                $scope.invalidCred = false;
                $scope.model = {
                    username: undefined,
                    password: undefined
                };
                $scope.spinnerActive = false;

                /*jslint unparam: true */
                $rootScope.$on('us-spinner:spin', function (event, key) {
                    $scope.spinneractive = true;
                });

                $rootScope.$on('us-spinner:stop', function (event, key) {
                    $scope.spinneractive = false;
                });

                httpLoadInterceptor.registerObserverCallback(function (numLoadings) {
                    $scope.ajaxOn = numLoadings ? true : false;
                    if ($scope.ajaxOn) {
                        if (!$scope.spinneractive) {
                            usSpinnerService.spin('spinner-1');
                        }
                    } else {
                        if ($scope.spinneractive) {
                            usSpinnerService.stop('spinner-1');
                        }
                    }
                });

                $scope.clickLogin = function () {
                    var model = $scope.model,
                        data = {
                            username: model.username,
                            password: model.password
                        };

                    user.login(data).then(function () {
                        $location.path('/');
                    }, function(err) {
                        $scope.invalidCred = true;
                    });
                };
            }]);