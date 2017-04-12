require('dotenv').config({silent: true});

var mongoose = require('mongoose'),
  donator_conn;







donator_conn = mongoose.createConnection(process.env.donator_db_conn);

donator_conn.on('error', function(err){
  if(err){
  	throw err;
  	console.log(donator_conn);
  }
});

donator_conn.once('open', function callback () {
  console.info('Mongo db connected successfully');
});

module.exports = donator_conn;
