const mongoose   = require('mongoose');
const Shops = require('../../app/models/Shops');

module.exports = (req, res) => {
  var coords = [];
    coords[0] = req.body.lon;
    coords[1] = req.body.lat;

  var myservice = req.body.service;
  var services = [];

  myservice.forEach(function(entry) {
      services.push(entry)
});

  var addshop = new Shops();      // create a new instance of the Bear model
  const insert = addshop.data;
  const shop = insert.shop;
  const location = insert.location;
  const addr = insert.address;
  const pic = insert.picture;
  const timeoff = insert.timeoff;

  shop.verified = false;
  shop.id =  req.body.shopid;
  shop.name =  req.body.shopname;
  shop.description =  req.body.description;
  location.type =  'point';
  location.coordinates =  req.body.coords;
  location.lon =  req.body.lon;
  location.lat = req.body.lat;
  addr.name =  req.body.addrname;
  addr.number =  req.body.number;
  addr.moo =  req.body.moo;
  addr.road =  req.body.road;
  addr.soi =  req.body.soi;
  addr.tambon =  req.body.tambon;
  addr.province =  req.body.province;
  addr.district =  req.body.district;
  addr.postcode =  req.body.postcode;
  pic.picurl1 =  req.body.picurl1;
  pic.picurl2 =  req.body.picurl2;
  pic.picurl3 =  req.body.picurl3;
  insert.service =  req.body.service;
  timeoff.openday = req.body.openday;
  timeoff.closeday = req.body.closeday;
  timeoff.opentime = req.body.opentime;
  timeoff.closetime = req.body.closetime;
  insert.promo = req.body.closetime;
  insert.opennow = false;
  insert.jobnow = false;
  insert.relationships.owner.id = req.body.ownerid;
  insert.relationships.owner.name = req.body.ownername;


   // save the bear and check for errors
   addshop.save(function(err) {
       if (err)
           res.send(err);
       res.json({ message: '201 Created' });
   });

};
