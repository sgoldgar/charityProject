require('dotenv').config({silent: true});

var mongoose = require('mongoose'),
  password_conn;

/*

//!ACHTUNG! THESE DB PASSWORDS ARE OUT IN THE WILD - HIDE IN PRODUCTION !ACHTUNG!
charity_db_conn=mongodb://pweyand:Fvnjty0b@ds153400.mlab.com:53400/wdi_groupproject_db1
donator_db_conn=mongodb://pweyand:Fvnjty0b@ds153400.mlab.com:53400/wdi_groupproject_db2
password_db_conn=mongodb://pweyand:Fvnjty0b@ds153400.mlab.com:53400/wdi_groupproject_db3


*/


//


password_conn = mongoose.createConnection(process.env.password_db_conn);

password_conn.on('error', function(err){
  if(err){
  	throw err;
  	console.log(password_conn);
  } 
});

password_conn.once('open', function callback () {
  console.info('Mongo db connected successfully');
});

module.exports = password_conn;
