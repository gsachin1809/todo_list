app.factory('List',function($resource){
// app.factory('List',function($resource,$log,$http,Base,locker,$state){
  var factory   =   {}

  factory.resource    =   function(){
    var url   =   '/api/v1/list/:id';
    return  $resource(url, {},{
        'store': { method:'POST',params:{}},
        'index': { method:'GET',params:{}},
        'destroy': { method:'PUT',params:{}},
    });
  }

   return factory;
});
