var express = require('express');
var router = express.Router();

 
 
var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');

router.post('/needs', function(req, res, next) {
 
  console.log('inside charity needs');
  console.log('req.body[needs]', req.body['needs']);
  var returnarrayobject = [];
  var dumcount = 0;
  var returncharities = [];
  var reqstring = req.body['needs']
  var reqneedsarray = reqstring.split(',');
  console.log('reqneedsarray', reqneedsarray);

  var loopcounter = 0;
  var looplength = 0;
 
  promise = new Promise(function(result){
 
    charity_model.find({}, function(err,posts){
      looplength = posts.length;
      posts.forEach(function(post){
 
        loopcounter+=1;

 
        for (var i = 0; i<post.needs.length; i++){
          for (var j = 0; j<reqneedsarray.length; j++){
 

            if (post.needs[i].trim()==reqneedsarray[j].trim()){
              returncharities.push(post);
              console.log("hey there sailor");
            }
          }
        }
 
        if (looplength === loopcounter){
          result(true);
        }
 
      });
    });

  });
 
  promise.then(function(resolve){
    if (resolve){
      console.log("returncharities ", returncharities);
      res.json(returncharities);
    }
  });


});
 
 
module.exports = router;