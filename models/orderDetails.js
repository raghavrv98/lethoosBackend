const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	shopImage: {
		type: String,
		// required: true,
	},
	customerCoupon: {
		type: String,
		// required: true,
	},
	orderSpecifications: {
		type: String,
		// required: true,
	},	
	customerDeliveryCharges: {
		type: String,
		// required: true,
	},	
	shopName: {
		type: String,
		// required: true,
	},
	shopAddress: {
		type: String,
		// required: true,
	},
	shopMobileNumber: {
		type: String,
		// required: true,
	},
	customerId: {
		type: String,
		// required: true,
	},
	isOrderCancel: {
		type: Boolean,
		// required: true,
	},
	customerName: {
		type: String,
		// required: true,
	},
	customerAddress: {
		type: String,
		// required: true,
	},
	customerNumber: {
		type: String,
		// required: true,
	},
	customerCallingNumber: {
		type: String,
		// required: true,
	},
	customerPaymentMethod: {
		type: String,
		// required: true,
	},
	customerTotalDiscount: {
		type: String,
		// required: true,
	},
	customerTotalAmount: {
		type: String,
		// required: true,
	},
	customerArea: {
		type: String,
		// required: true,
	},
	customerOrderNumber: {
		type: String,
		// required: true,
	},
	customerOrderDate: {
		type: Number,
		// required: true,
	},
	customerOrders: {
		type: Array,
		// required: true,
	},
	orderCreatedDate: {
		type: Number,
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