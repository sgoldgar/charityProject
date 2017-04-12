var express = require('express');
var router = express.Router();
var cors = require('cors');

var donatorconn = require('../db/donator_db'),
  donator_model = donatorconn.model('donatorSchema');
  console.log('test');

router.get('/donatorportal', function(req,res,next){
	
	donator_model.find({name}, function(err, name){
		if (err) {console.log(err);}

		res.json(name);
		console.log(donator_model.name);
	});


});