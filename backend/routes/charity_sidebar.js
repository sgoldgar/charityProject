var express = require('express');
var router = express.Router();

var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');
  console.log('test');

router.post('/', function(req, res, next) {
  console.log('got to charity profile');
   charity_model.find({email: req.body.email}, function(err, name) {
     if (err) console.log(err);

     res.json(name);



    //
    //  donator_model.name = req.body.name|| donator_model.name;
    //  donator_model.img = req.body.img|| donator_model.img;
     //
    //
     //
    //    res.json(donator_model);
       console.log('charity_model', charity_model);
    	 });
	});


   module.exports = router;
