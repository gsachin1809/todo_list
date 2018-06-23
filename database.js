const  mongoose = require('mongoose');

var config = require(__dirname +'/config.js');

var mongodbURL = config.mongodb.URL;

mongoose.connect(mongodbURL,(err) => {
  if(err){
    console.log(err);
  }else{
    console.log("connected with mongoDB");
  }
});
module.exports = mongoose;
