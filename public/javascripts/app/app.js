var app = angular.module('ToDoList', ['ngRoute']);
app.controller('RootController', function($scope) {
  $scope.message = 'Hello from HomeController';
});
app.controller('HomeController', function($scope) {
  console.log("hello");
  $scope.message = 'Hello from HomeController';
});
