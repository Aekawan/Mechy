var mongoose = require('mongoose');
var Admins = require('../../app/models/Admins');
var firebase = require("firebase-admin");

module.exports = (req, res) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        firebase.auth().verifyIdToken(token).then(function(decodedToken) {
            var uid = decodedToken.uid;

            if (uid) {
                Admins.find({
                    'data.userid': uid
                }).count( (err, user) => {
                    if (err) {
                        res.send(err);
                    }
                    if (user == 1) {
                        Admins.find({}, (err, data) => {
                            if (err) res.send(err);
                            res.json(data);
                        });
                    }
                    else {
                        res.json('No Authentication Admin');
                    }
                });
            }
            else {
                res.status(403).json({"message": 'Token Error'});
            }
        }).catch( (error) => {
            res.json({"message": 'Token Error'});
        });
    }
    else {
        res.status(403).json({
            "status": '403 Forbidden'
            , "message": 'No Token'
        })
    }
};
