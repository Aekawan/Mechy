const mongoose = require('mongoose');
const URL = 'mongodb://superadmin_mechy:bank2538!@ds145289.mlab.com:45289/mechyjaab';
//const URL = 'mongodb://localhost:27017/Mechy';

function callback(err, result) {
    if (err) {
        throw err;
    }
}
module.exports = mongoose.connect(URL, callback);
