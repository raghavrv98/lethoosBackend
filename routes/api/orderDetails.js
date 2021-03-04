const express = require('express');
const router = express.Router();
var mailUtils = require('./../../mail-util')

require('dotenv').config();

const fast2sms = require('fast-two-sms')


//customer Login model

const orderDetails = require('../../models/orderDetails')
const customerLogin = require('../../models/customerLogin')
var order

// Order Details

router.post('/customerLogin/orderDetails', async (req, res) => {
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
		var data = req.body
		var customerOrders = data.customerOrders

		// var message = `Shop Name = ${data.shopName}\n\n Shop Address = ${data.shopAddress}\n\n Shop Mobile Number = ${data.shopMobileNumber}\n\n ----------------------------------------------------------\n\n Customer Name = ${data.customerName}\n\n Customer Address = ${data.customerAddress}\n\n Customer Number = ${data.customerNumber}\n\n Customer Calling Number = ${data.customerCallingNumber}\n\n Customer Payment Method = ${data.customerPaymentMethod}\n\n Customer Total Discount = ${data.customerTotalDiscount}\n\n Customer Total Amount = ${data.customerTotalAmount}\n\n Customer Area = ${data.customerArea}\n\n Customer Order Number = ${data.customerOrderNumber}\n\n Customer Order Date = ${data.customerOrderDate}\n\n ----------------------------------------------------------\n\n Order Details = ${customerOrders}\n\n`
		// mailUtils.sendMail('lethoooos@gmail.com', "Important: Order Details", message)
		// console.log('message: ', message);

		var message = `\nShop Details\n----\nShop Name = ${data.shopName}\n----\n\nCustomer Details\n----\nName = ${data.customerName}\nAddress = ${data.customerAddress}\nNumber = ${data.customerNumber}\nCalling Number = ${data.customerCallingNumber}\nPayment Method = ${data.customerPaymentMethod}\nTotal Amount = ${data.customerTotalAmount}\n----\nOrder Details\n\n----\n${customerOrders}\n`

		const response = await (fast2sms.sendMessage({ authorization: process.env.API_KEY, message: message, numbers: ['8439395179'] }))
		console.log('response: ', response);

		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

module.exports = router;