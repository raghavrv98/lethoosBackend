const express = require('express');
const router = express.Router();

require('dotenv').config();

//customer Login model

const petrolDetails = require('../../models/petrolManagement')

// Delete Petrol Slip 

router.delete('/petrolDetailsDelete/:id', async (req, res) => {
	try {
		let orders = await petrolDetails.findByIdAndDelete(req.params.id);
		if (!orders) throw Error('No items');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Get Petrol Slip

router.get('/petrolDetailsAll', async (req, res) => {
	try {
		let orders = await petrolDetails.find();
		if (!orders) throw Error('No items');
		res.status(200).json(orders);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Get Petrol slip by id

router.get('/petrolDetailsById/:id', async (req, res) => {
	try {
		let orders = await petrolDetails.findById(req.params.id);
		if (!orders) throw Error('No items');
		res.status(200).json(orders);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Post Petrol Slip

router.post('/petrolDetailsCreate', async (req, res) => {
	let order = new petrolDetails(req.body);
	try {
		const post = await order.save();
		if (!post) throw Error('Something went wrong while saving the order');
		res.status(200).json(post);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Update Petrol Slip

router.patch('/petrolDetailsUpdate/:id', async (req, res) => {
	try {
		let orders = await petrolDetails.findByIdAndUpdate(req.params.id, req.body);
		if (!orders) throw Error('Something went wrong while updating the slip!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}



});

module.exports = router;