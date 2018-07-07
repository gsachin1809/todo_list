var app = angular.module('ToDoList', ['ngRoute','ngResource','toastr']);

app.controller('RootController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('HomeController', function($scope) {
  console.log("hello");
  $scope.message = 'Hello from HomeController';
});


app.controller('ListHomeController',function($scope,List,toastr) {
  console.log("hello");
  $scope.message = 'Hello from HomeController';
  $scope.list_name = '';
  $scope.description = '';
  $scope.lists = '';
  $scope.color_class = '';
  $scope.destroy_id  = '';

  $scope.getList = function() {
      var data = {'data' : 'hello'};
      List.resource().index(function(response){
        console.log(response);
        if(response.code == 200){
          $scope.lists = response.data;
        }else{
        }
        $('#close_list_modal').click();
      });
  }

  $scope.saveList = function() {
     var data = {'data' : 'hello'};
     data.list_name = $scope.list_name;
     data.description = $scope.description;
     data.color_class = $scope.color_class;
     if(data.color_class == null || data.color_class.length == 0){
       data.color_class = 'offer offer-radius offer-primary';
     }
     console.log(data);
     console.log("save list");
     List.resource().store(data, function(response){
       console.log(response);
       $scope.description = '';
       $scope.lists = '';
       $scope.color_class = '';
       if(response.code == 200){
         $scope.getList();
         // toastr.success(response.data, 'Succesful');
       }else{
         // toastr.error(response.data, 'Error');
       }
       $('#close_list_modal').click();
     });
  }

  $scope.destroy = function(id){
    console.log("lsdf");
    $scope.destroy_id = id;
    $('#destroy_modal').modal('show');

  }

  $scope.destroyConfirm = function(){
    $('#destroy_modal').modal('hide');
    var data = {
      'id' : $scope.destroy_id ,
    }
    $scope.destroy_id = '';
    List.resource().destroy(data,data, function(response){
      console.log("element deleted");
      console.log(response);
      if(response.code == 200){
        $scope.getList();
        // toastr.success(response.data, 'Succesful');
      }else{
        // toastr.error(response.data, 'Error');
      }
    });
  }

  $scope.getList();

  $scope.viewList = function(id) {
    console.log(id);

    $state.go('list-item', {id :id });
  }
});
