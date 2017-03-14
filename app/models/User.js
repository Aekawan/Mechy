var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new Schema({
      data: {
        userid: String
        , email: String
        , firename: String
        , lastname: String
        , dob: String
        , tel: Number
        , picture: String
    }
});
var User = mongoose.model('Customer', CustomerSchema);
module.exports = User
