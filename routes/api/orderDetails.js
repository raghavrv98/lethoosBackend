const express = require('express');
const router = express.Router();
var mailUtils = require('./../../mail-util')

//customer Login model

const orderDetails = require('../../models/orderDetails')
const customerLogin = require('../../models/customerLogin')
var order

// Order Details

router.post('/orderDetails', async (req, res) => {
	order = new orderDetails(req.body);
	try {
		const post = await order.save();
		if (!post) throw Error('Something went wrong while saving the order');
		res.status(200).json(post);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

router.patch('/customerLogin/orderDetails/:id', async (req, res) => {
	const updateCustomerLogin = new customerLogin(req.body);
	try {
		const login = await customerLogin.findByIdAndUpdate(req.params.id, req.body);
		if (!login) throw Error('Something went wrong while updating the login!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

router.post('/customerLogin/orderDetails/mail', async (req, res) => {
	const sendOrderDetails = new customerLogin(req.body);
	try {
		var message = req.body
		mailUtils.sendMail('lethoooos@gmail.com', "Important: Order Details", JSON.stringify(message))
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

module.exports = router;


// {
//     "orderHistory": [
//         {
//             "shopAddress": "Near Railway Station",
//             "shopName": "Chinese Fast Food",
//             "shopMobileNumber": "1112223334",
//             "customerName": "raghav",
//             "customerAddress": "baldev ganj",
//             "customerMobileNumber": "112233445",
//             "customerId": "",
//             "orderDetails": [
//                 {
//                     "item": "steam momos",
//                     "quantity": "1",
//                     "portion": "half",
//                     "price": "20"
//                 }
//             ],
//             "couponCode": "FIRST100",
//             "deliveryCharge": "20",
//             "totalAmount": "40"
//         },
// 			   "shopAddress": "near ghantaghar",
//             "shopName": "maa bhagwati",
//             "shopMobileNumber": "1112223334",
//             "customerName": "raghav",
//             "customerAddress": "baldev ganj",
//             "customerMobileNumber": "112233445",
//             "customerId": "",
//             "orderDetails": [
//                 {
//                     "item": "cheese patties",
//                     "quantity": "1",
//                     "portion": "full",
//                     "price": "70"
//                 }
//             ],
//             "couponCode": "FIRST100",
//             "deliveryCharge": "20",
//             "totalAmount": "40"
//         }
//     ],
//     "notifications": [],
//     "coupon": [],
//     "_id": "600440fdde5d77be08f2c075",
//     "address": "baldev Ganj",
//     "name": "raghav",
//     "mobileNumber": "12345",
//     "password": "12345",
//     "date": "2021-01-17T13:51:57.017Z",
// }