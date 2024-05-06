(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;
    $scope.sayMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      return $filter('uppercase')(msg);
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
  }

})();
