require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.donator_db_conn);

var Donator = require('./models/donator_model');

var donator_data = [
  {
  	name: 'Homer Simpson',
  	username: 'hsimpson',
  	business: 'Springfield Nuclear Power Plant',
  	email: 'hsimpson@gmail.com',
  	img: '../frontend/assets/Profile-Icon.svg'
  },
  {
    name: 'Kanye West',
    username: 'kwest',
    business: 'Kanye Records',
    email: 'kwest@gmail.com',
    img: '../frontend/assets/Profile-Icon.svg'
  },
  {
    name: 'Yummy Tummy',
    username: 'YumMyTummy',
    business: 'CandyLand',
    email: 'ytummy@gmail.com',
    img: '../frontend/assets/Profile-Icon.svg'
  },
];


Donator.create(donator_data, function(err, donators) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('donator inserted: ', donators);
  process.exit();
});
