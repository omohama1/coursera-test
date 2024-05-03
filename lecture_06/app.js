(function () {
    'use strict';

    angular.module('NameCalculator', [])

        .controller('NameCalculatorController', function ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;

            $scope.displayNumeric = function () {
                var totalNameValue = calculateNumericforString($scope.name);
                $scope.totalValue = totalNameValue;
            };

            function calculateNumericforString(string) {
                var totalValue = 0;
                for (var i = 0; i < string.length; i++) {
                    totalValue += string[i].charCodeAt();
                }
                return totalValue;
            }
        })



})();
