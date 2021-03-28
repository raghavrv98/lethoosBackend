const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petrolSchema = new Schema({
	amount: {
		type: Number,
		// required: true,
	},
	previousKm: {
		type: Number,
		// required: true,		
	},
	currentKm: {
		type: Number,
		// required: true,
	},
	petrolPrice: {
		type: Number,
		// required: true,
	},
	petrolPumpPlace: {
		type: String,
		// required: true,
	},
	bikeName: {
		type: String,
		// required: true,
	},
	bikeNumber: {
		type: String,
		// required: true,
	},
	date: {
		type: Number,
		default: new Date().getTime(),
	}
})

module.exports = mongoose.model('petrolDetails', petrolSchema);