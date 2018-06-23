var app = angular.module('ToDoList', ['ngRoute']);
app.controller('RootController', function($scope) {
  $scope.message = 'Hello from HomeController';
});
