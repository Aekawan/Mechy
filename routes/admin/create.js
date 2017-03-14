var mongoose = require('mongoose');
var Admins = require('../../app/models/Admins');


module.exports = (req, res) => {

    var admin = new Admins(); //new object models
    admin.status = '200 OK';
    admin.data.userid = req.body.userid;
    admin.data.email = req.body.email;
    admin.data.firename = req.body.firename;
    admin.data.lastname = req.body.lastname;
    admin.data.dob = req.body.dob;
    admin.data.tel = req.body.tel;
    admin.data.picture = req.body.picture;

    admin.save(function (err) { //save to db
        if (err) res.send(err);
        res.json({
            message: '201 Created'
        });
    });
};
