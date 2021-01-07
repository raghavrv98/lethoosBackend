const express = require('express');
const router = express.Router();

//posts model

const Posts = require('../../models/posts')

//@routes POST api/posts


// Get all post 

router.get('/posts', async (req, res) => {
	try {
		const posts = await Posts.find();
		if (!posts) throw Error('No items');
		res.status(200).json(posts);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})

// Get post by id

router.get('/posts/:id', async (req, res) => {
	try {
		const posts = await Posts.findById(req.params.id);
		if (!posts) throw Error('No items');
		res.status(200).json(posts);
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
})


// Create A post 

router.post('/posts', async (req, res) => {
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


// Delete A post 

router.delete('/posts/:id', async (req, res) => {
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

// Update A post 

router.patch('/posts/:id', async (req, res) => {
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

module.exports = router;