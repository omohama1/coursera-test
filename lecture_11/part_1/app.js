(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Bartolomeu";

    $scope.sayMessage = function () {
      return `${$scope.name} deserves a punch in the face`
    }
  }

})();
