var express = require('express');
var router = express.Router();

var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');
  console.log('test');

router.post('/profile', function(req, res, next) {
  var newDonator = new donator_model({
  	charityName: req.body.charityName,
    bio: req.body.bio,
	  phoneNumber: req.body.phoneNumber,
	  profileManager: req.body.profileManager,
    img: req.body.img,
	  website: req.body.website,
    streetAddress: req.body.streetAddress,
	  city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    hours: req.body.hours,
    needs: req.body.needs
  });

console.log('charityName', charityName);
console.log()

  newCharity.save(function(err, post){
    if(err){
      res.status(500).send({
        status: "Error",
        error: err
      });
    }else{
      res.status(200).json({
        status: "ok",
        post: post
      //res.redirect('/');
      });
    }
  });
});

router.delete('/profile',function(req,res,next){
  donator_model.remove({},function(err,post){
    if (err) console.log(err);

    res.json({
      status: "deleted!",
      post: post
    });
  });
});




router.get('/profile', function(req, res, next) {

  donator_model.find({},function(err,posts){
    if(err) console.log(err);

   res.json(posts);

  });

});

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
