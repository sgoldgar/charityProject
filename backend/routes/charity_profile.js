var express = require('express');
var router = express.Router();


var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');

router.post('/needs', function(req, res, next) {

	var charityName = req.body.charityName;
	var bio = req.body.bio;
	var phoneNumber = req.body.phoneNumber;
	var profileManager = req.body.profileManager;
	var img = req.body.img;
	var website = req.body.website;
	var streetAddress = req.body.streetAddress;
	var city = req.body.city;
	var state = req.body.state;
	var zip = req.body.zip;
	var hours = req.body.hours;
	var needs = req.body.needs;


});


module.exports = router;
