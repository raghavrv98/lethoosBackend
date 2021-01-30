const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerLoginSchema = new Schema({
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
		default: new Date().getTime(),
	}
})

module.exports = mongoose.model('Login', customerLoginSchema); 

