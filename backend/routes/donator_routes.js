var express = require('express');
//var router = express.Router();

var donatorconn = require('../db/donator_db'), 
  donator_model = donatorconn.model('donatorSchema');

var router = express.Router();





router.post('/',function(req,res,next){
  var newDonator = new donator_model({
    name: req.body.name
  });

  newDonator.save(function(err, post){
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



router.delete('/',function(req,res,next){
  donator_model.remove({},function(err,post){
    if (err) console.log(err);

    res.json({
      status: "deleted!",
      post: post  
    });
  });
});




router.get('/', function(req, res, next) {

  donator_model.find({},function(err,posts){
    if(err) console.log(err);

   res.json(posts);

  });

});


module.exports = router;
