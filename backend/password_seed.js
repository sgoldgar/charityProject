// seedRaces.js
require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.password_db_conn);

var password = require('./models/password_model');

var password_data = [
  { password: 'LorDPerogi' },
  { username: 'YumMyTummy' },
  { type: 'charity'}
];


// var passwordSchema = new mongoose.Schema({
// 	password: { type: String, required: true }, 
// 	username: { type: String, required: true },
// 	type: { type: String, required: true }
// });




password.create(password_data, function(err, passwords) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('passwords inserted: ', passwords);
  process.exit();
});