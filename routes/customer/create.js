var mongoose   = require('mongoose');
const User = require('../../app/models/User');

module.exports = (req, res) => {
  var user = new User();      // create a new instance of the Bear model
  user.data.userid = req.body.userid;
  user.data.email =  req.body.email;
  user.data.firename =  req.body.firename;
  user.data.lastname =  req.body.lastname;
  user.data.dob =  req.body.dob;
  user.data.tel =  req.body.tel;
  user.data.picture =  req.body.picture;
   // save the bear and check for errors
   user.save(function(err) {
       if (err)
           res.send(err);
       res.json({ message: '201 Created' });
   });

};
