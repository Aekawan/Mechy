const mongoose = require('mongoose');
const User = require('../../app/models/User');
const Admins = require('../../app/models/Admins');
const firebase = require("firebase-admin");
const boom = require('express-boom');

module.exports = (req, res) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        firebase.auth().verifyIdToken(token).then((decodedToken) => {
            var uid = decodedToken.uid;
            if (uid) {
                Admins.find({
                    'data.userid': uid
                }).count((err, user) => {
                    if (err) {
                        res.send(err);
                    }
                    if (user == 1) {
                        User.find({}, (err, alluser) => {
                            if (err) res.send(err);
                            res.status(200).json(alluser);
                        });
                    }
                    else {
                        User.find({
                            'data.userid': uid
                        }, (err, user) => {
                            if (err) res.send(err);
                            res.json(user);
                        });
                    }
                });
            }
            else {
                res.status(403).boom.unauthorized('Token Not Verify');
            }
        }).catch(function (error) {
            res.status(403).boom.unauthorized('Token Not Verify');
        });
    }
    else {
        res.status(403).boom.unauthorized('Token Not Verify');
    }
};
