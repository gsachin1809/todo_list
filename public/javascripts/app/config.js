app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : '/javascripts/app/templates/home.html',
    controller  : 'HomeController'
  })


  .otherwise({redirectTo: '/'});
});
