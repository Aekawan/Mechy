var mongoose = require('mongoose');
var User = require('./app/models/User');
var firebase = require("firebase-admin");

module.exports = (req, res) => {
    var token = req.params.update || req.headers['x-access-token'] || req.body.token;
    if (token) {
        firebase.auth().verifyIdToken(token).then(function (decodedToken) {
            var uid = decodedToken.uid;
            User.find({
                'data.userid': uid
            }, function (err, user) {
                if (err) res.send(err);
                res.json(user);
            });
        }).catch(function (error) {
            res.status(403).send({
                "status": '403 Forbidden'
                , "message": 'No Token'
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
