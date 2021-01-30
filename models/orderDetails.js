const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	shopName: {
		type: String,
		// required: true,
	},
	shopMobileNumber: {
		type: String,
		// required: true,
	},
	shopAddress: {
		type: String,
		// required: true,
	},
	shopImage: {
		type: String,
		// required: true,
	},
	customerName: {
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
	orderId: {
		type: String,
		// required: true,
	},
	orderDetails: {
		type: Array,
		// required: true,
	},
	couponCode: {
		type: Array,
		// required: true,
	},
	deliveryCharge: {
		type: Number,
		// required: true,
	},
	totalDiscount: {
		type: Number,
		// required: true,
	},
	paymentMode: {
		type: String,
		// required: true,
	},
	descrition: {
		type: String,
		// required: true,
	},
	orderDate: {
		type: Number,
		default: new Date().getTime(),
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