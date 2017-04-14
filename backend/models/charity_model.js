

var mongoose = require('mongoose');

var charitySchema = new mongoose.Schema({
	charityName: { type: String, required: false },
	bio: { type: Array, required: false},
	phoneNumber: { type: String, required: false},
	profileManager: {type: String, required: false},
	img: {type: String, required: false},
	website: {type: String, required:false},
	streetAddress: {type: String, required: false},
	city: {type: String, required: false},
	state: {type: String, required: false},
	email: {type: String, required: false},
	zip: {type: String, required: false},
	hours: {type: String, required: false},
	needs : { type : Array , "default" : [], required:false }
});

var charity = mongoose.model('charitySchema', charitySchema);

module.exports = charity;
