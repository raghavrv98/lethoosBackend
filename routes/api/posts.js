const express = require('express');
const router = express.Router();

//posts model

const Posts = require('../../models/posts')
const shopDetails = require('../../models/shopDetails')

//@routes POST api/posts


// Get all Shops 

router.get('/shop', async (req, res) => {
	try {
		const posts = await Posts.find();
		if (!posts) throw Error('No items');
		res.status(200).json(posts);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Get Shop by id

router.get('/shop/:id', async (req, res) => {
	try {
		const posts = await Posts.findById(req.params.id);
		if (!posts) throw Error('No items');
		res.status(200).json(posts);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Create Shop 

router.post('/shop', async (req, res) => {
	const newPost = new Posts(req.body);
	try {
		const post = await newPost.save();
		if (!post) throw Error('Something went wrong while saving the post');
		res.status(200).json(post);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Delete Shop 

router.delete('/shop/:id', async (req, res) => {
	const deletePost = new Posts(req.body);
	try {
		const post = await Posts.findByIdAndDelete(req.params.id);
		if (!post) throw Error('No post found');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Update Shop 

router.patch('/shop/:id', async (req, res) => {
	const updatePost = new Posts(req.body);
	try {
		const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
		if (!post) throw Error('Something went wrong while updating the post!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});




// Create Shop with Details 

router.post('/shopDetails', async (req, res) => {
	const newShopDetails = new shopDetails(req.body);
	try {
		const shopDetails = await newShopDetails.save();
		if (!shopDetails) throw Error('Something went wrong while saving the post');
		res.status(200).json(shopDetails);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

// Get All Shop with Details 

router.get('/shopDetails', async (req, res) => {
	try {
		const posts = await shopDetails.find();
		if (!posts) throw Error('No items');
		res.status(200).json(posts);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Get Shop with Details by id

router.get('/shopDetails/:id', async (req, res) => {
	try {
		const posts = await shopDetails.findById(req.params.id);
		if (!posts) throw Error('No items');
		res.status(200).json(posts);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Delete Shop 

router.delete('/shopDetails/:id', async (req, res) => {
	const deletePost = new shopDetails(req.body);
	try {
		const post = await shopDetails.findByIdAndDelete(req.params.id);
		if (!post) throw Error('No post found');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});


module.exports = router;