var express = require('express');
var router = express.Router();
var cors = require('cors');

var donatorconn = require('../db/donator_db'),
  donator_model = donatorconn.model('donatorSchema');
  console.log('test');

router.post('/', function(req, res, next) {
  console.log('got to donor profile');
   donator_model.find({email: req.body.email}, function(err, name) {
     if (err) console.log(err);

     res.json(name);



    //
    //  donator_model.name = req.body.name|| donator_model.name;
    //  donator_model.img = req.body.img|| donator_model.img;
     //
    //
     //
    //    res.json(donator_model);
       console.log('donator_model', donator_model);
    	 });
	});


   module.exports = router;
