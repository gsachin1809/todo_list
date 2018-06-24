var ListModule = require(__dirname +'/../modules/ListModule.js');

module.exports = {
  'index' : function(req, res){
    var data = req.body;
    ListModule.index(data).then(function(result) {
      console.log(result);
      res.send(result);
    },function errorHandler(err){
      console.log("response in controller");
      console.log(err);
      res.send(err);
    }).catch(function errorHandler2(error){
      console.log(error);
      res.send(error)
    });
  },

  'store' : function(req, res){
    var data = req.body;
    console.log(data);
    ListModule.store(data).then(function(result) {
      console.log(result);
      res.send(result);
    },function errorHandler(err){
      console.log("response in controller");
      console.log(err);
      res.send(err);
    }).catch(function errorHandler2(error){
      console.log(error);
      res.send(error)
    });
  },

  'show' : function(req, res){
    var data = req.params;
    console.log(data);
    ListModule.show(data).then(function(result) {
      res.send(result);
    },function errorHandler(err){
      res.send(err);
    }).catch(function errorHandler2(error){
      res.send(error)
    });
  },

  'destroy' : function(req, res){
    var data = req.params;
    console.log(data);
    ListModule.destroy(data).then(function(result) {
      res.send(result);
    },function errorHandler(err){
      res.send(err);
    }).catch(function errorHandler2(error){
      res.send(error)
    });
  }
}
