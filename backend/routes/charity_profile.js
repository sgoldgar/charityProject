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





module.exports = router;
