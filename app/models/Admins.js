var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AdminsSchema = new Schema({
    status: String
    , data: {
        picture: String
        , tel: Number
        , dob: String
        , lastname: String
        , firename: String
        , email: String
        , userid: String
    }
});
var Admins = mongoose.model('admins', AdminsSchema);
module.exports = Admins
