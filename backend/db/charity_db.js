require('dotenv').config({silent: true});

var mongoose = require('mongoose'),
  charity_conn;



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
