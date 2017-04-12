var express = require('express');
var router = express.Router();


var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');

router.post('/needs', function(req, res, next) {

  console.log('inside charity needs');

  var returnarrayobject = [];
  var dumcount = 0;
  var reqneedsarray = [];
  var reqneedsstring = req.body["needs[]"];
  var returncharities = [];
  reqneedsarray.push(reqneedsstring);

  console.log('req.body.needs ', req.body.needs);
  console.log('req.needs ', req.needs);
  console.log('req.body ', req.body);
  console.log('req.body.needs[]', req.body["needs[]"]);
  console.log('reqneedsstring', reqneedsstring);
  console.log('reqneedsarray[0]', reqneedsarray[0]);

  var loopcounter = 0;
  var looplength = 0;

  promise = new Promise(function(result){

    charity_model.find({}, function(err,posts){
      looplength = posts.length;
      posts.forEach(function(post){

        loopcounter+=1;

        // console.log('reqneedsarrary[0]', reqneedsarray[0]);
        // console.log('reqneedsarray.length', reqneedsarray.length);

        for (var i = 0; i<post.needs.length; i++){
          for (var j = 0; j<reqneedsarray.length; j++){
            // console.log("all aboard");
             console.log("post.needs[i]", post.needs[i]);
            // console.log('reqneedsarrary', reqneedsarray);
            // console.log('i ', i, ' j ', j);
            // console.log('reqneedsarrary[0]', reqneedsarray[0]);
             console.log("reqneedsarrary[j]", reqneedsarray[j]);
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
