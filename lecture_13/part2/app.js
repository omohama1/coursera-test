(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', lovesFilter)

  MsgController.$inject = ['$scope', 'lovesFilter'];
  function MsgController($scope, lovesFilter) {
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      return lovesFilter(msg);
    };


    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };

  }

  function lovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    }
  }

})();
