const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	shopAddress: {
		type: String,
		// required: true,
	},
	shopName: {
		type: String,
		// required: true,
	},
	shopMobileNumber: {
		type: String,
		// required: true,
	},
	customerMobileNumber: {
		type: String,
		// required: true,
	},
	customerAddress: {
		type: String,
		// required: true,
	},
	customerName: {
		type: String,
		// required: true,
	},
	customerId: {
		type: String,
		// required: true,
	},
	orderDetails: {
		type: Array,
		// required: true,
	},
	couponCode: {
		type: String,
		// required: true,
	},
	deliveryCharge: {
		type: String,
		// required: true,
	},
	totalAmount: {
		type: String,
		// required: true,
	},
	descrition: {
		type: String,
		// required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	}
})

module.exports = mongoose.model('orderDetails', orderSchema);

// {
// 	"shopAddress": "Near Railway Station",
// 	"shopName": "Chinese Fast Food",
// 	"shopMobileNumber": "1112223334",
// 	"customerName": "raghav",
// 	"customerAddress": "baldev ganj",
// 	"customerMobileNumber": "112233445",
// 	"customerId": "",
// 	"orderDetails": [
// 	  {
// 		"item": "steam momos",
// 		"quantity": "1",
// 		"portion": "half",
// 		"price": "20"
// 	  }
// 	],
// 	"couponCode": "FIRST100",
// 	"deliveryCharge": "20",
// 	"totalAmount": "40"
//   }