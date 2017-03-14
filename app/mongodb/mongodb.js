const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/Mechy';

function callback(err, result) {
    if (err) {
        throw err;
    }
}
module.exports = mongoose.connect(URL, callback);
