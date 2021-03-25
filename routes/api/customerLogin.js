const express = require('express');
const router = express.Router();
const moment = require('moment');
const fast2sms = require('fast-two-sms')


//customer Login model

const customerLogin = require('../../models/customerLogin')

// customer available or not while login

router.post('/customerCheck', async (req, res) => {
	const payload = new customerLogin(req.body);
	try {
		let login = await customerLogin.find({
			$and: [
				{ "mobileNumber": payload.mobileNumber },
				{ "password": payload.password }
			]
		})
		var userDetails = {}
		if (login.length > 0) {
			login = {
				orderHistory: login[0].orderHistory,
				notifications: login[0].notifications,
				coupon: login[0].coupon,
				_id: login[0]._id,
				image: login[0].iamge,
				name: login[0].name,
				mobileNumber: login[0].mobileNumber,
				alternateMobileNumber: login[0].alternateMobileNumber,
				area: login[0].area,
				address: login[0].address,
				accountType: login[0].accountType
			}
			userDetails = {
				msg: "User Exist",
				data: login
			}
		}
		else {
			userDetails = {
				msg: "Incorrect Mobile Number or Password",
				data: {}
			}
		}
		if (!userDetails) throw Error('No items');
		res.status(200).json(userDetails);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})


//forgot password

router.post('/customerLogin/forgotPassword', async (req, res) => {
	const payload = new customerLogin(req.body);
	
	try {
		let login = await customerLogin.find({ "mobileNumber": payload.mobileNumber })
		var userDetails = {}
		if (login.length > 0) {
			const response = await (fast2sms.sendMessage({ authorization: process.env.API_KEY, message: `Your Le Thoos Account password is ${login[0].password}`, numbers: [payload.mobileNumber] }))
			userDetails = {
				msg: "SMS sent",
				data : login
			}
		}
		else {
			userDetails = {
				msg: "Incorrect Mobile Number",
				data: {}
			}
		}
		if (!userDetails) throw Error('No items');
		res.status(200).json(userDetails);
	}
	catch (err) {
		console.log('err: ', err);
		res.status(400).json({ msg: err })
	}
})

// Get customer Login by id

router.get('/customerLogin/:id', async (req, res) => {
	try {
		const login = await customerLogin.findById(req.params.id);
		if (!login) throw Error('No items');
		res.status(200).json(login);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Create customer Login 

router.post('/customerLogin', async (req, res) => {
	const payload = new customerLogin(req.body);
	try {
		let login = await customerLogin.find({ "mobileNumber": payload.mobileNumber })
		var userDetails = {}
		if (login.length == 1) {
			userDetails = {
				msg: "User Exist",
				data: {}
			}
			res.status(200).json(userDetails);
		}
		else {
			let login = await payload.save();

			login = {
				orderHistory: login.orderHistory,
				notifications: login.notifications,
				coupon: login.coupon,
				_id: login._id,
				address: login.address,
				name: login.name,
				mobileNumber: login.mobileNumber,
				date: login.date,
				accountType: login.accountType
			}

			userDetails = {
				msg: "User Created",
				data: login
			}

			if (!userDetails) throw Error('Something went wrong while saving the customerLogin');
			res.status(200).json(userDetails);
		}
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Delete customer Login 

router.delete('/customerLogin/:id', async (req, res) => {
	const deletePost = new customerLogin(req.body);
	try {
		const login = await customerLogin.findByIdAndDelete(req.params.id);
		if (!login) throw Error('No login found');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Update customer Login 

router.patch('/customerLogin/:id', async (req, res) => {
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

// for removing particular key from mongodb

// router.patch('/remove/keyName', async (req, res) => {
// 	try {
// 		const post = await customerLogin.updateMany({}, {$unset: {"paymentMethod" : 1}});
// 		res.status(200).json({ success: true });
// 	}
// 	catch (err) {
// 		res.status(400).json({ msg: err })
// 	}
// });


// for adding particular key in object

// router.patch('/add/keyName', async (req, res) => {
// 	const updatePost = new customerLogin(req.body);
// 	try {
// 		const post = await customerLogin.updateMany({
// 			$set: { "accountType": "user" }
// 		});
// 		if (!post) throw Error('Something went wrong while opening the shop!');
// 		res.status(200).json({ success: true });
// 	}
// 	catch (err) {
// 		res.status(400).json({ msg: err })
// 	}
// });

//update all customer for coupons

router.patch('/customerLogin/all/coupons', async (req, res) => {
	try {
		const post = await customerLogin.updateMany({
			$push: {
				"coupon": {
					name: "WEL10",
					description: "10 rupees off",
					offeredBy: "Le Thoos",
					validity: new Date().getTime() + 172800000,
					redeemAttempt: 1,
					amount: 10
				}
			}
		});

		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

//update single customer for coupons

router.patch('/customerLogin/coupons/:id', async (req, res) => {
	try {
		const post = await customerLogin.updateOne({ "_id": req.params.id }, {
			$push: {
				"coupon": {
					name: "OFFER10",
					description: "10 rupees off",
					offeredBy: "Le Thoos",
					validity: new Date().getTime() + 172800000,
					redeemAttempt: 1,
					amount: 10
				}
			}
		});

		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

router.patch('/customerLogin/orderCancel/:id', async (req, res) => {
	const user = new customerLogin(req.body);

	try {
		let customerObject = await customerLogin.find({ "_id": req.params.id })
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});



module.exports = router;