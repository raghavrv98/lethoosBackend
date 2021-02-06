const express = require('express');
const router = express.Router();
const moment = require('moment');
const wbm = require('wbm');


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
				address: login[0].address
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
				date: login.date
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

		// wbm.start().then(async () => {
		// 	const phones = ['918630422423', '918192095423'];
		// 	const message = 'Thanks for order. Your Bill Details... \n\n\n\n';
		// 	await wbm.send(phones, message);
		// 	await wbm.end();
		// }).catch(err => console.log(err));

		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});


module.exports = router;