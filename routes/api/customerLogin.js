const express = require('express');
const router = express.Router();
const moment = require('moment');
//customer Login model

const customerLogin = require('../../models/customerLogin')

// customer available or not while login

router.post('/customerCheck', async (req, res) => {
	const payload = new customerLogin(req.body);
	try {
		const login = await customerLogin.find({
			$and: [
				{ "mobileNumber": payload.mobileNumber },
				{ "password": payload.password }
			]
		})
		var userDetails = {}
		if (login.length > 0) {
			userDetails = {
				msg: "User EXist",
				data: login
			}
		}
		else {
			userDetails = {
				msg: "Incorrect Mobile Number or Password",
				data: []
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
	const login = new customerLogin(req.body);
	try {
		const post = await login.save();
		if (!post) throw Error('Something went wrong while saving the customerLogin');
		res.status(200).json(post);
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


module.exports = router;