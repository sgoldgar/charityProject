// seedRaces.js
require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.password_db_conn);

var password = require('./models/password_model');

var password_data = [
  { password: 'LorDPerogi' },
  { username: 'YumMyTummy' }
];

password.create(password_data, function(err, passwords) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('passwords inserted: ', passwords);
  process.exit();
});