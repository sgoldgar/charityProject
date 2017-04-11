// seedRaces.js
require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.charity_db_conn);

var charity = require('./models/charity_model');

var charity_data = [{
	name: 'University United Methodist Church',
  description: 'Open Door at University United Methodist Church',
	number: '(512) 478-9387',
	img: '../frontend/assets/UUMC-Square-Logo.svg',
	website: 'http://www.uumc.org/',
	address: '2409 Guadalupe St. Austin, TX 78705',
	hours: 'M-F, 6AM-6PM  Sa, 10AM-6PM',
	needs: ['Dry Goods', 'Household Goods', 'Volunteer Time']
},
{
  name: 'Central Texas Food Bank',
  description: 'Central Texas Food Bank',
  number: '(512) 282-2111',
  img: '../frontend/assets/Logo_CTFB_square.svg',
  website: 'https://www.centraltexasfoodbank.org/',
  address: '6500 Metropolis Dr., Austin, TX 78744',
  hours: 'M-F, 6AM-6PM  Sa, 10AM-6PM',
  needs: ['Dry Goods', 'Volunteer Time' ]
},
{
  name: 'Meals on Wheels',
  description: 'Meals on Wheels of Austin',
	number: '(512) 476-6325',
	img: '../frontend/assets/LogoMealsonWheels-square.svg',
	website: 'https://www.mealsonwheelscentraltexas.org/',
	address: '3227 East 5th St. Austin , TX 78702',
	hours: 'M-F, 6AM-6PM  Sa, 10AM-6PM',
	needs: ['Meals']
}
];

charity.create(charity_data, function(err, charities) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('charity inserted: ', charities);
  process.exit();
});
