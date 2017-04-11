

var mongoose = require('mongoose');

var donatorSchema = new mongoose.Schema({
	name: { type: String, required: true },
	username: {type: String, required: true},
	business: {type: String, required: false},
	email: {type: String, required: false},
	img: {type: String, required: false} 
});

var donator = mongoose.model('donatorSchema', donatorSchema);

module.exports = donator;