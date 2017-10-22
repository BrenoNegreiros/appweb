var myApp = angular.module('myApp', []);
myApp.controller('funcaoController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
}]);
