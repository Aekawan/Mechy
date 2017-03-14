const mongoose = require('mongoose');
const User = require('./app/models/User');
const firebase = require("firebase-admin");


module.exports = (req, res) => {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    if (token) {
        firebase.auth().verifyIdToken(token).then(function (decodedToken) {
            var uid = decodedToken.uid;
            User.find({}, function (err, user) {
                if (err) res.send(err);
                res.json(user);
            });
        }).catch(function (error) {
            res.status(403).send({
            "status": '403 Forbidden'
            , "message": 'Token Not Verify '
        })
        });
    }
    else {
        res.status(403).send({
            "status": '403 Forbidden'
            , "message": 'No Token'
        })
    }

};
