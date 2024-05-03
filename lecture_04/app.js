(function () {
    'use strict';

    let x = "hello";
    angular.module('myFirstApp', [])

        .controller('MyFirstController', function () {
            console.log("Assalamualaikum");
            console.log(x);
        });
})();
