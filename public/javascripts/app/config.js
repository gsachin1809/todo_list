app.config(function($stateProvider,  $urlRouterProvider) {

  $stateProvider.state('root', {
    url : '/',
    templateUrl : '/javascripts/app/templates/home.html',
    controller  : 'ListHomeController'
  });
  // $stateProvider.state('root', {
  //   url : '/',
  //   'views':{
  //     'root_view':{
  //       templateUrl : '/javascripts/app/templates/home.html',
  //       controller  : 'ListHomeController'
  //     }
  //   }
  // });
  //
  // $urlRouterProvider.otherwise('/');
});
