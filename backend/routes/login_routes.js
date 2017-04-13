var express = require('express');
var router = express.Router();

var passwordconn = require('../db/password_db'),
  password_model = passwordconn.model('passwordSchema');

var donatorconn = require('../db/donator_db'),
  donator_model = donatorconn.model('donatorSchema');

var charityconn = require('../db/charity_db'),
  charity_model = charityconn.model('charitySchema');

var bcryptaspromised = require('bcrypt-as-promised');
const saltRounds = 10;



function postPass(hashedpass, sendusername, sendtype, res){

	console.log("POSTPASS");

	console.log('hashedpass ', hashedpass);
	console.log('sendusername ', sendusername);


	var newPassword = new password_model({
    	password: hashedpass,
    	username: sendusername,
    	type: sendtype
	});

  newPassword.save(function(err, post){
    if(err){
      res.status(500).send({
        status: "Error",
        error: err
      });
    }else{
      res.status(200).json({
        status: "ok",
        post: post
      });
    }
  });


}




router.post("/signup/charitypost", function(req,res,next){

	console.log('made it inside charitypost');
	//console.log('req ', req);
	console.log('req.body.name ', req.body.name, ' req.body.address ', req.body.address);
	console.log('req.name ', req.name, " req.name ", req.name);

	var newCharity = new charity_model({
    profileManager:req.body.profileManager,
    email: req.body. email,
    streetAddress: req.body.streetAddress,
    charityName: req.body.charityName
	});

  newCharity.save(function(err, post){
    if(err){
      console.log("shiterror: ", err);
      res.status(500).send({
        status: "Error",
        error: err
      });
    }else{
      res.status(200).json({
        status: "ok",
        post: post
      });
    }
  });
});



		// var name = $('.donorname').val();
		// var username = $('.donoremail').val();
		// var email = $('.donoremail').val();

		// var data3 = {
		// 	name: name,
		// 	username: username,
		// 	email: email
		// }





router.post("/signup/donatorpost", function(req,res,next){

	console.log('made it inside donatorpost');
	//console.log('req ', req);
	//console.log('req.body.name ', req.body.name, ' req.body.address ', req.body.address);
	//console.log('req.name ', req.name, " req.name ", req.name);

	console.log('req.body.name ', req.body.name, ' req.body.username ', req.body.username, ' req.body.email ', req.body.email);


	var newDonator = new donator_model({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email
	});

  newDonator.save(function(err, post){
    if(err){
      console.log("shiterror: ", err);
      res.status(500).send({
        status: "Error",
        error: err
      });
    }else{
      res.status(200).json({
        status: "ok",
        post: post
      });
    }
  });
});









router.post('/signup', function(req,res,next){

	var foundmatch = false;
	var loopcounter = 0;
	var postslength = 0;

	var promise = new Promise(function(resolve, reject){

		password_model.find({}, function(err,posts){
			postslength = posts.length;
			posts.forEach(function(post){
				loopcounter+=1;
				if (post.username === req.body.username){
					foundmatch = true;
					reject(true);
				}else if(loopcounter===postslength && foundmatch===false && loopcounter != 0){
					resolve(true);
				}
			});
		});


	});


	promise.then(function(resolve){
		if(resolve){
			bcryptaspromised.hash(req.body.password, saltRounds)
				.then(function(hash,err){
					postPass(hash, req.body.username, req.body.type, res);
					//res.json({'result': 'resolve'});
				});
		}

	}, function(reject){
		if(reject){
			res.json({'status':'reject'})
		}
	});

});


router.post('/', function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var redirectistrue = false;
	var numbernomatches = 0;

		password_model.find({}, function(err,posts){
			postslength = posts.length;
			posts.forEach(function(post){

				//console.log("post ", post);
				//console.log("req.body.username ", req.body.username, " req.body.password ", req.body.password);

				if (post.username == req.body.username){
					bcryptaspromised.compare(req.body.password, post.password)
							.then(function(result){

								console.log("passwords match!")

								if(post.type == "charity"){
									console.log("redirect to charity page!");
									res.json({'goto': 'charityportal'});
								}

								if (post.type == "donator"){
									console.log("redirect to donator page!");
									res.json({'goto': 'donatorportal'});
								}
							})
							.catch(bcryptaspromised.MISMATCH_ERROR, function(result){
								res.json({'goto':'passwordsdontmatch'});
							});
				}else{
					numbernomatches += 1;
				}

			});


			if (numbernomatches == postslength){
				res.json({'goto':'passwordsdontmatch'});
			}
		});

});


module.exports = router;


//**********************************************************************************************************************************

//EVERYTHING BELOW IS DEPRECATED AND KEPT FOR REFERENCE - DO NOT DELETE

// router.post('/signup', function(req,res,next){

// 	var loopcounter = 0;
// 	var foundothername = false;
// 	var postslength;

// 	var promise = new Promise(function(resolve){
// 		password_model.find({}, function(err,posts){
// 			postslength = posts.length;
// 			posts.forEach(function(post){
// 				if (post.username === req.body.username){
// 					console.log("found equality");
// 					foundothername = true;
// 					resolve(true);
// 				}
// 				loopcounter += 1;
// 			});
// 		});

// 		if(loopcounter===postslength && foundothername===false){
// 			resolve(false)
// 		}

// 	});

// 	promise.then(function(resolve){

// 		if (resolves){
// 			res.json({"result":"useralreadyindb"});
// 		}else{
// 			bcryptaspromised.hash(req.body.password, saltRounds)
// 				.then(function(hash,err){
// 					postPass(hash, req.body.username, req.body.type, res);
// 					res.json({'result': resolve});
// 				});
// 		}
// 	});
// });








/*
router.post('/signup', function(req,res,next){

	var promise = new Promise(function(resolve){
		//resolve(false)
		password_model.find({username: req.body.username}, function(err, post){
			//res.json({'result': req.body.username});
			resolve(true);
		})
	});

	promise.then(function(resolve){
		if (resolve) {
			res.json({'result': resolve});
		}else{
			bcryptaspromised.hash(req.body.password, saltRounds)
				.then(function(hash,err){
					postPass(hash, req.body.username, req.body.type, res);
					res.json({'result': resolve});
				});
		}
	});

});
*/


/*
router.post('/signup', function(req,res,next){

	//var postscounter = 0;
	//var postslength = 0;
	var foundothername = false;

	var promise = new Promise(function(resolve, reject) {

		password_model.find({}, function(err,posts){
			postslength = posts.length;
			//posts.forEach(function(post){

			for(var i = 0; i < posts.length; i++){
				if (posts[i].username === req.body.username){
					console.log("found equality");
					resolve(true);
					i = posts.length;
				}else{
					reject(true);
				}
			}

				// if (post.username == req.body.username){
				// 	console.log("found equality");
				// 	foundothername = true;
				// }

			//});
		});


		// if (foundothername === false){
		// 	resolve(true);
		// 	reject(false);
		// }

		// if (foundothername === true){
		// 	resolve(false);
		// 	reject(true);
		// }


	});


	promise.then(function(resolve, reject){

		if (resolve){
			bcryptaspromised.hash(req.body.password, saltRounds)
						.then(function(hash,err){
							postPass(hash, req.body.username, req.body.type, res);
							res.json({'resolve':resolve, 'reject':reject});
							//res.redirect('/');
						});
		 }else{
		 	res.json({'resolve':resolve, 'reject':reject});
		 }


		 //else{
		// 	res.json({"result":resolve});
		// }
		// }else if (result==="foundothername"){
		// 	res.json({"postscounter":postscounter, "postslength":postslength, "foundothername": foundothername});
		// 	//res.json({"result":"useralreadyexists"});
		// }

	}, function(reject){
		 // if (reject){
		 // 	res.json({'resolve':resolve, 'reject':reject});
		 // }
	});

});

*/

/*
    bcrypt.compare('mypassword', hash, function(err, result) {
        if (err) { throw (err); }
        console.log(result);
    });
*/

/*
res.redirect absolute/relative
relative dfdf/
absolute /dfkj
*/





/*

posts.forEach(function(post){
			if (req.body.username===posts.username){
				//console.log("Username/Password not added to database. You must have a unique username");
				usernamecheck+=1;
			}
			postschecked += 1;

			if(postschecked===posts.length){
				if(postschecked===usernamecheck){
					console.log("Username/Password not added to database. You must have a unique username");
				}else{
					bcrypt.hash(req.body.password, saltRounds)
						.then(function(hash,err){
							postPass(hash, req.body.username, res);
						});
				}
			}
		});


*/





/*

var usernamecheck=0;
var postscheck = 0;

router.post('/signup', function(req,res,next){

	var promise = new Promise(function(resolve, reject){
		password_model.find({}, function(err, posts){
			posts.forEach(function(post){

				if (req.body.username===posts.username){
					console.log("Username/Password not added to database. You must have a unique username");
					usernamecheck+=1;
				}

				postscheck += 1;

			});

			if(postscheck===posts.length){
				resolve("done");
			}else{
				reject("not done");
			}

		});

	});
});





	password_model.find({}, function(err, posts){
		var promise = Promise(function(resolve,reject){

				posts.forEach(function(post){
					if (req.body.username===posts.username){
						console.log("Username/Password not added to database. You must have a unique username");
					}
				});



		});



		});
	});

	*/

/*

var numberofmismatchpasswords = 0;

router.post('/signup', function(req,res,next){

	var postslength = 0;
	var savedhash;

	bcrypt.hash(req.body.password, saltRounds)
		.then(function(hash, err){
				if(err) console.log("Error BC1", err);
				console.log("hash, ", hash);

				password_model.find({}, function(err, posts){

					postslength = posts.length;
					savedhash = hash;
					console.log("postslength ", posts.length);

					if(err) console.log("Error BC2", err);
					posts.forEach(function(post){
						bcrypt.compare(req.body.password, post.password)
							.then(
								function(){
									console.log('inside then!');
									console.log("req.body.password", req.body.password);
									console.log("post.password ", post.password);

									if(post.username===req.body.username && !bcrypt.MISMATCH_ERROR){
										console.log('username and password are already in the database!');
									}

									if (bcrypt.MISMATCH_ERROR){
										console.log("mismatch!");
										numberofmismatchpasswords = numberofmismatchpasswords + 1;
										console.log("numberofmismatchpasswords ", numberofmismatchpasswords);


										if (numberofmismatchpasswords === postslength){
											postPass(savedhash, req.body.username, res);
										}

									}

								}
							)
							.catch(function(){console.log("some error!");});

					});

				});

		});

});

*/

/*

//THIS WAY DOES NOT WORK EITHER :C

var passwordMatch = false;
var usernameMatch = null;
var canaddtodatabase;
var resolvedTrue = false;

function findPass(username, plainpass, callback){
	password_model.find({}, function(err, posts){
		console.log("POSTS: ", posts.length);
		posts.forEach(function(post){

			bcrypt.compare(plainpass, post.password, function(err,res){
				console.log("in function findpass");
				if (res === true){
					console.log("res==true");
					passwordMatch = true;
					usernameMatch = post.username;
					callback(passwordMatch, usernameMatch, resolvedTrue);
				}
			});

			if(posts[posts.length-1].username === post.username && posts[posts.length-1].password === post.password){
				resolvedTrue = true;
			}else{
				resolvedTrue = false;
			}

			console.log("resolvedTrue, ", resolvedTrue);

		});
	});
}



router.post('/signup', function(req,res,next){
	bcrypt.hash(req.body.password, saltRounds, function(err, hash){
		var promise = new Promise(function(resolve, reject){

			findPass(req.body.username, req.body.password, function(passwordMatch, usernameMatch, resolvedTrue) {
				console.log("in router.post");
				if (passwordMatch===true && usernameMatch===req.body.username){
				 	canaddtodatabase = false;
				 	console.log("false");
				}else if (passwordMatch===false || usernameMatch!=req.body.username){
					canaddtodatabase = true;
					console.log("true");
				}
			});

			if (resolvedTrue){
				resolve(canaddtodatabase);
			}else{
				//setTimeout(100);
			}
		});

		promise.then(function(result){

			if (result){
				postPass(hash, req.body.username);
				console.log("new username password added to database")
			}else{
				console.log("cant add to database, username and password already exist");
			}

		}, function(err){console.log(err);});


	});

});






//RACE CONDITION HELL BELOW; ALL WHO ENTER BEWARE





var passwordMatch = false;
var usernameMatch = null;

function findPass(plainpass, username, callback){

	passwordMatch = false;

	password_model.find({}, function(err, posts){
		if(err) console.log('findpass error: ', err);

		if (posts.length === 0){

			bcrypt.hash(plainpass, saltRounds, function(err, hash){
				postPass(hash, username);
			});

		}

			posts.forEach(function(post){

				bcrypt.compare(plainpass, post.password, function(err,res){
					if (res === true){
						console.log("res==true");
						passwordMatch = true;
						usernameMatch = post.username;
					}

					callback(passwordMatch, usernameMatch);

				});


			});
	});

}





router.post('/signup', function(req,res,next){

	var canaddtodatabase = false;
	var passwordstore = req.body.password;
	var usernamestore = req.body.username;

	bcrypt.hash(passwordstore, saltRounds, function(err, hash) {

		findPass(passwordstore, usernamestore, function(passwordMatch, usernameMatch) {

			//console.log("usernameMatch", usernameMatch, " usernamestore ", usernamestore);

			if (passwordMatch===true && usernameMatch===usernamestore){
				console.log("false");
			 	canaddtodatabase = false;
			}else if (passwordMatch===false || usernameMatch!=usernamestore){
				console.log("true");
				canaddtodatabase = true;
			}
		});

		//console.log("canadd before if ", canaddtodatabase);
		//console.log("usernameMatch ", usernameMatch, " usernamestore ", usernamestore);
		//console.log("passwordMatch ", passwordMatch);

		console.log("canaddtodatabase ", canaddtodatabase);

		if (canaddtodatabase){
			postPass(hash, usernamestore);
			console.log("posting to database");
		}else{
			console.log("cant add to database, username and password already exist");
		}

	});

});
*/

/*
router.post('/', function(req,res,next){




});
*/


/*

router.post('/',function(req,res,next){
  var newPassword = new password_model({
    name: req.body.name
  });

  newPassword.save(function(err, post){
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
  password_model.remove({},function(err,post){
    if (err) console.log(err);

    res.json({
      status: "deleted!",
      post: post
    });
  });
});




router.get('/', function(req, res, next) {

  password_model.find({},function(err,posts){
   if(err) console.log(err);

   res.json(posts);

  });

});
*/
