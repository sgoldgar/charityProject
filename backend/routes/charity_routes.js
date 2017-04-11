var express = require('express');
//var router = express.Router();

var charityconn = require('../db/charity_db'), 
  charity_model = charityconn.model('charitySchema');

var router = express.Router();


router.get('/needs', function(req, res, next) {

  var returnarrayobject = [];
  var dumcount = 0;

  //I THINK that the forEach function behaves synchronously but in the case that it doesnt the below dumcount
  //will not behave as expected.


  req.needs.forEach(function(reqneed){
    charity_model.forEach(function(post){
      
      dumcount = 0;
      post.needs.forEach(function(postneed){
        if (postneed===reqneed && dumcount != 0){
          returnarrayobject.push(post);
          dumcount = 1;
        }
      });

    });
  });

  res.json(returnarrayobject);

});


module.exports = router;
