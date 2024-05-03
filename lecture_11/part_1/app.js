(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Bartolomeu";

    $scope.sayMessage = function () {
      return "All good boys deserve a punch in the face"
    }
  }

})();
