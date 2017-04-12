var express = require('express');
var router = express.Router();
var cors = require('cors');

var donatorconn = require('../db/donator_db'),
  donator_model = donatorconn.model('donatorSchema');
  console.log('test');

router.patch('/donatorProfile', function(req, res, next) {
   donator_model.findByOne({email: req.body.email}, function(err, name) {
     if (err) console.log(err);

     donator_model.name = req.body.name|| donator_model.name;
     donator_model.img = req.body.img|| donator_model.img;

donator_model.save(function(err, donator_model) {
       if (err) console.log(err);

       res.json(donator_model);
       console.log('donator_model', donator_model);
    	 });
	});
});

   module.exports = router;