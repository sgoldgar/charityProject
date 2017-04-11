require('dotenv').config({silent: true});

var mongoose = require('mongoose'),
  charity_conn;



<<<<<<< HEAD
=======
//!ACHTUNG! THESE DB PASSWORDS ARE OUT IN THE WILD - HIDE IN PRODUCTION !ACHTUNG!
//charity_db_conn=mongodb://pweyand:Fvnjty0b@ds153400.mlab.com:53400/wdi_groupproject_db1
//donator_db_conn=mongodb://pweyand:Fvnjty0b@ds153400.mlab.com:53400/wdi_groupproject_db2
//password_db_conn=mongodb://pweyand:Fvnjty0b@ds153400.mlab.com:53400/wdi_groupproject_db3





>>>>>>> 454e33eab1d4b5aa6723a8488f33d8ef39f2a958




charity_conn = mongoose.createConnection(process.env.charity_db_conn);

charity_conn.on('error', function(err){
  if(err){
  	throw err;
  	console.log(charity_conn);
  }
});

charity_conn.once('open', function callback () {
  console.info('Mongo db connected successfully');
});

module.exports = charity_conn;


// var charity_db = require('mongoose');
// charity_db.createConnection('charity uri');

// var userSchema = new charity_db.Schema({
// 	name: String
// });

// var User = charity_db.model('User',userSchema);
