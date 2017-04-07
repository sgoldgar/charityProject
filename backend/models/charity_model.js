

var mongoose = require('mongoose');

var charitySchema = new mongoose.Schema({
	name: { type: String, required: true }
});

mongoose.model('charitySchema', charitySchema);