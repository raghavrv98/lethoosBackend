const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopDetails = new Schema({
	address: {
		type: String,
		// required: true,
	},
	rating: {
		type: String,
		// required: true,
	},
	discount: {
		type: String,
		// required: true,
	},
	delieveryTime: {
		type: String,
		// required: true,
	},
	image: {
		type: String,
		// required: true,
	},
	status: {
		type: String,
		// required: true,
	},
	time: {
		type: String,
		// required: true,
	},
	vendorName: {
		type: String,
		// required: true,
	},
	description: {
		type: String,
		// required: true,
	},
	details: {
		type: Array,
		// required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	}
})

module.exports = mongoose.model('shopDetails', shopDetails); 