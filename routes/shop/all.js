var mongoose = require('mongoose');
const Shops = require('../../app/models/Shops');
var firebase = require("firebase-admin");

module.exports = (req, res) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        firebase.auth().verifyIdToken(token).then((decodedToken) => {
            var uid = decodedToken.uid;
            if (uid) {

              Shops.find({}, (err, shop) => {
                  if (err) res.send(err);
                  res.json(shop);
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
