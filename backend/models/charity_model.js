

var mongoose = require('mongoose');

var charitySchema = new mongoose.Schema({
	name: { type: String, required: false },
	description: { type: Array, required: false},
	number: { type: String, required: false},
	img: {type: String, required: false},
	website: {type: String, required:false},
	address: {type: String, required: false},
	hours: {type: String, required: false},
	needs : { type : Array , "default" : [], required:false }
});

var charity = mongoose.model('charitySchema', charitySchema);

module.exports = charity;