const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a crop name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name can not be more than 50 characters'],
	},
	description: {
		type: String,
		required: [true, 'Please add a description'],
		maxlength: [500, 'Description can not be more than 500 characters'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	cropInfo: {
		type: String,
		required: [true, 'please add crop information'],
	},
});

module.exports = mongoose.model('Crop', CropSchema);
