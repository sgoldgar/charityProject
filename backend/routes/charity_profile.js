var express = require('express');
var router = express.Router();

var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');
  console.log('test');



  router.patch('/push', function(req, res, next) {
   charity_model.findOne({email: req.body.LOCALEMAIL}, function(err, charity) {

     if (err) console.log(err);

     console.log("charity", charity);

     // charity = ({
     //          charityName : req.body.charityName || charity.charityName,
     //          bio : req.body.bio || charity.bio,
     //          phoneNumber : req.body.phoneNumber || charity.phoneNumber,
     //          profileManager : req.body.profileManager || charity.profileManager,
     //          img : req.body.img || charity.img,
     //          website : req.body.website || charity.website,
     //          streetAddress : req.body.streetAddress || charity.streetAddress,
     //          city : req.body.city || charity.city,
     //          state : req.body.state || charity.state,
     //          email : req.body.email || charity.email,
     //          zip : req.body.zip || charity.zip,
     //          hours : req.body.hours || charity.hours,
     //          needs : req.body.needs || charity.needs
     //        });


              charity.charityName = req.body.charityName || charity.charityName;
              charity.bio = req.body.bio || charity.bio;
              charity.phoneNumber = req.body.phoneNumber || charity.phoneNumber;
              charity.profileManager = req.body.profileManager || charity.profileManager;
              charity.img = req.body.img || charity.img;
              charity.website = req.body.website || charity.website;
              charity.streetAddress = req.body.streetAddress || charity.streetAddress;
              charity.city = req.body.city || charity.city;
              charity.state = req.body.state || charity.state;
              charity.email = req.body.email || charity.email;
              charity.zip = req.body.zip || charity.zip;
              charity.hours = req.body.hours || charity.hours;
              charity.needs = req.body.needs || charity.needs;

    console.log("req.body.email", req.body.email);
    console.log("charityAFTER", charity);


      charity.save(function(err, post){
        if(err){
          console.log("shiterror: ", err);
          res.status(500).send({
            status: "Error",
            error: err
          });
        }else{
          res.status(200).json({
            status: "ok",
            post: post
          });
        }
      });

  });
 });


router.post('/load', function(req, res, next) {
   charity_model.find({email: req.body.email}, function(err, charity) {
     if (err) console.log(err);

     res.json(charity);

   });
});

module.exports = router;
