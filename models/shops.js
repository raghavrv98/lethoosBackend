const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	name: {
		type: String,
		// required: true,
	},
	mobileNumber: {
		type: String,
		// required: true,		
	},
	address: {
		type: String,
		// required: true,
	},
	image: {
		type: String,
		// required: true,
	},
	status: {
		type: Boolean,
		// required: true,
	},
	priority: {
		type: String,
		// required: true,
	},
	time: {
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
	rating: {
		type: String,
		// required: true,
	},
	discount: {
		type: String,
		// required: true,
	},
	deliveryTime: {
		type: String,
		// required: true,
	},
	date: {
		type: Number,
		default: new Date().getTime(),
	}
})

module.exports = mongoose.model('Shops', postSchema);
