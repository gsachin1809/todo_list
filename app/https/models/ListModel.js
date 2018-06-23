const mongoose = require('mongoose');

console.log("model connected");
var List = mongoose.model('lists',{
  'user_id': "String",
  'list_name': "String",
  'description': "String",
  'created_at': "Date",
  'udpated_at': "Date"
});
module.exports = List;
