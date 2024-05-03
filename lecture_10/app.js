// (function () {
//   'use strict';

//   angular.module('DIApp', [])
//     .controller('DIController', DIController);

//   DIController.$inject = ['$scope', '$filter'];

//   function DIController($scope, $filter) {
//     $scope.name = "Karolus";

//     $scope.upper = function () {
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     };
//   }

// })();

//Doesn't work
// angular.module("DIApp", []).controller("DIController", function e(n, o) { n.name = "Karolus", n.upper = function () { var e = o("uppercase"); n.name = e(n.name) } });

//Works
// angular.module("DIApp", []).controller("DIController", ["$scope", "$filter", function e(n, o) { n.name = "Karolus", n.upper = function () { var e = o("uppercase"); n.name = e(n.name) } }]);

!function () { "use strict"; function e(e, n) { e.name = "Karolus", e.upper = function () { var o = n("uppercase"); e.name = o(e.name) } } angular.module("DIApp", []).controller("DIController", e), e.$inject = ["$scope", "$filter"] }();