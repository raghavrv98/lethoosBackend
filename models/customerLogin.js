const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerLoginSchema = new Schema({
	address: {
		type: String,
		// required: true,
	},
	name: {
		type: String,
		// required: true,
	},
	mobileNumber: {
		type: String,
		// required: true,
	},
	password: {
		type: String,
		// required: true,
	},
	image: {
		type: String,
		// required: true,
	},
	orderHistory: {
		type: Array,
		// required: true,
	},
	notifications: {
		type: Array,
		// required: true,
	},
	coupon: {
		type: Array,
		// required: true,
	},
	status: {
		type: String,
		// required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	}
})

module.exports = mongoose.model('Login', customerLoginSchema); 

