(function () {
    'use strict';

    angular.module('myFirstApp', [])

        .controller('MyFirstController', function ($scope) {
            $scope.name = "Omar";
            $scope.giveGreeting = function () {
                return "Hi Everybody"
            }

        });

})();
