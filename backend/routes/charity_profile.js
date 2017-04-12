var express = require('express');
var router = express.Router();

var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');
  console.log('test');

  router.patch('/charityprofile', function(req, res, next) {
   charity_model.findByOne({email: req.body.email}, function(err, student) {
     if (err) console.log(err);

     charity_model.charityName = req.body.charityName || charity_model.charityName;
     charity_model.bio = req.body.bio|| charity_model.bio;
     charity_model.phoneNumber = req.body.phoneNumber || charity_model.phoneNumber;
     charity_model.profileManager = req.body.profileManager || charity_model.profileManager;
     charity_model.img = req.body.img || charity_model.img;
     charity_model.website = req.body.website || charity_model.website;
     charity_model.streetAddress = req.body.streetAddress || charity_model.streetAddress ;
     charity_model.city = req.body.city || charity_model.city;
     charity_model.state = req.body.state || charity_model.state;
     charity_model.email = req.body.email || charity_model.email;
     charity_model.zip = req.body.zip || charity_model.zip;
     charity_model.hours = req.body.hours || charity_model.hours;
     charity_model.needs = req.body.needs || charity_model.needs;

     charity_model.save(function(err, charity_model) {
       if (err) console.log(err);

       res.json(charity_model);
       console.log('charity_model', charity_model);
     });

   });
  });






module.exports = router;
