var Q         = require('q');
var ListModel = require(__dirname+'/../models/ListModel.js');

module.exports   =   {

    'index' : function(data){

      var defer = Q.defer();
      var response = { 'code' : 200,'data' : 'API is been called'  };
      try {
          if(response.code == 200){
            ListModel.find((err, docs)=> {
              try {
                if(err){
                  response.code = 400;
                  response.data = err;
                  defer.reject(response);
                }
                if(docs.length == 0 ){
                  response.code = 404;
                  response.data = "No record found";
                  defer.reject(response);
                }else{
                  response.code = 200;
                  response.data = docs;
                  defer.resolve(response);
                }

              } catch (e) {
                response.code = 404;
                response.data = e;
                defer.reject(response);
              }
            });

          }else{
            defer.reject(response);
          }

        } catch (e) {
          response.code = 501;
          response.data = e;
          defer.reject(response);
        }
        return defer.promise;
      },

    'store' : function(data){

      var defer = Q.defer();
      var response = { 'code' : 200,'data' : 'API is been called'  };
      try {
          if(response.code == 200){
            var new_list = new ListModel(data);
            new_list.save((err, docs)=> {
              try {
                if(err){
                  response.code = 400;
                  response.data = err;
                  defer.reject(response);
                }
                response.code = 200;
                response.data = docs;
                defer.resolve(response);
              } catch (e) {
                response.code = 404;
                response.data = e;
                defer.reject(response);
              }
            });
          }else{
            defer.reject(response);
          }

        } catch (e) {
          response.code = 501;
          response.data = e;
          defer.reject(response);
        }
        return defer.promise;
      },


    'show' : function(data){

      var defer = Q.defer();
      var response = { 'code' : 200,'data' : 'API is been called'  };
      try {
          if(response.code == 200){
            console.log(data);
            ListModel.find({'_id' : data.id},(err, docs)=> {
              try {
                if(err){
                  response.code = 400;
                  response.data = err;
                  defer.reject(response);
                }
                if(docs == null){
                  response.code = 404;
                  response.data = 'No record found';
                  defer.resolve(response);
                }else{
                  response.code = 200;
                  response.data = docs;
                  defer.resolve(response);
                }

              } catch (e) {
                response.code = 404;
                response.data = e;
                defer.reject(response);
              }
            });
          }else{
            defer.reject(response);
          }

        } catch (e) {
          response.code = 501;
          response.data = e;
          defer.reject(response);
        }
        return defer.promise;
      },

    'destroy' : function(data){

      var defer = Q.defer();
      var response = { 'code' : 200,'data' : 'API is been called'  };
      try {
          if(response.code == 200){
            console.log(data);
            ListModel.find({'_id' : data.id},(err, docs)=> {
              try {
                if(err){
                  response.code = 400;
                  response.data = err;
                  defer.reject(response);
                }
                if(docs == null){
                  response.code = 404;
                  response.data = 'No record found';
                  defer.resolve(response);
                }else{
                  ListModel.remove({'_id' : data.id},(err, docs)=> {
                    response.code = 200;
                    response.data = docs;
                    defer.resolve(response);
                  });
                }
              } catch (e) {
                response.code = 404;
                response.data = e;
                defer.reject(response);
              }
            });
          }else{
            defer.reject(response);
          }

        } catch (e) {
          response.code = 501;
          response.data = e;
          defer.reject(response);
        }
        return defer.promise;
      },


}
