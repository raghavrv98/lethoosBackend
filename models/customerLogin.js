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
	alternateMobileNumber: {
		type: String,
		// required: true,
	},
	address: {
		type: String,
		// required: true,
	},
	area: {
		type: String,
		// required: true,
	},
	paymentMethod: {
		type: String,
		// required: true,
	},
	password: {
		type: String,
		// required: true,
	},
	accountType: {
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
		type: Boolean,
		// required: true,
	},
	date: {
		type: Number,
		default: new Date().getTime(),
	}
})

module.exports = mongoose.model('Login', customerLoginSchema);

// couponCode

// coupon: [
	// {
	// 	"name": "DEL10",
	// 	"description": "Free Home Delivery",
	// 	"amount": 10,
	// 	"offeredBy": "Lethoos",
	// 	"validity": "01-02-2021",
	// 	"redeemAttempt": "1"
	// }
// ]