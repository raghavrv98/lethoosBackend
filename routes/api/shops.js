const express = require('express');
const router = express.Router();
const moment = require('moment');
//shops model

const Shops = require('../../models/shops')

//@routes POST api/shops


// Get all Shops 

router.get('/shop', async (req, res) => {
	try {
		let shops = await Shops.find();
		let shopList = []
		shops.map(val => {
			let obj = {
				_id: val._id,
				name: val.name,
				description: val.description,
				address: val.address,
				mobileNumber: val.mobileNumber,
				image: val.image,
				rating: val.rating,
				discount: val.discount,
				deliveryTime: val.deliveryTime,
				image: val.image,
				status: val.status,
				priority: val.priority,
				time: val.time,
				date: moment(val.date).format('DD MMM YYYY HH:mm:ss')
			}
			shopList.push(obj)
		})
		if (!shopList) throw Error('No items');
		res.status(200).json(shopList);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Get Shop by id

router.get('/shop/:id', async (req, res) => {
	try {
		const shops = await Shops.findById(req.params.id);
		if (!shops) throw Error('No items');
		res.status(200).json(shops);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Create Shop 

router.post('/shop', async (req, res) => {
	const shops = new Shops(req.body);
	try {
		const post = await shops.save();
		if (!post) throw Error('Something went wrong while saving the post');
		res.status(200).json(post);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Delete Shop 

router.delete('/shop/:id', async (req, res) => {
	const deletePost = new Shops(req.body);
	try {
		const post = await Shops.findByIdAndDelete(req.params.id);
		if (!post) throw Error('No post found');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Update Shop 

router.patch('/shop/:id', async (req, res) => {
	const updatePost = new Shops(req.body);
	try {
		const post = await Shops.findByIdAndUpdate(req.params.id, req.body);
		if (!post) throw Error('Something went wrong while updating the post!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});


module.exports = router;