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

// {
// 	"name": "Gotiya Fast Food",
// 	"mobileNumber": "9634507008",
// 	"address": "Near Bharat Milap Chowk",
// 	"image": "https://thumbs.dreamstime.com/b/fast-food-store-front-view-orandge-background-vector-illustration-83976351.jpg",
// 	"status": true,
// 	"priority": "7",
// 	"time": "2:00 PM to 8:00 PM",
// 	"description": "Famous for its Burgers, Pizza's and Shakes",
// 	"details": [
// 	  {
// 		"name": "Veg Burger",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 1
// 	  },
// 	  {
// 		"name": "Paneer Burger",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 2
// 	  },
// 	  {
// 		"name": "Cheese Burger",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 3
// 	  },
// 	  {
// 		"name": "Tandoori Burger",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "70",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 4
// 	  },
// 	  {
// 		"name": "Double Tikki Burger",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 5
// 	  },
// 	  {
// 		"name": "Cheese Patties",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "20",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 6
// 	  },
// 	  {
// 		"name": "Sweet Corn Patties",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "30",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 7
// 	  },
// 	  {
// 		"name": "Special Patties",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 8
// 	  },
// 	  {
// 		"name": "Pizza Patties",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 9
// 	  },
// 	  {
// 		"name": "Garlic Bread",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 10
// 	  },
// 	  {
// 		"name": "Cheese Garlic Bread",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 11
// 	  },
// 	  {
// 		"name": "Gravy Chaap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "100",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 12
// 	  },
// 	  {
// 		"name": "Dry Chaap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "120",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 13
// 	  },
// 	  {
// 		"name": "Afghani Chaap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "120",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 14
// 	  },
// 	  {
// 		"name": "Shahi Chaap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "200",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 15
// 	  },
// 	  {
// 		"name": "Butter Pavbhaji",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 16
// 	  },
// 	  {
// 		"name": "Masala Butter Pavbhaji",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 17
// 	  },
// 	  {
// 		"name": "Kuclcha Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 18
// 	  },
// 	  {
// 		"name": "Mix Veg Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "100",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 19
// 	  },
// 	  {
// 		"name": "Spicy Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "110",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 20
// 	  },
// 	  {
// 		"name": "Onion Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "110",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 21
// 	  },
// 	  {
// 		"name": "Onion Capsicum",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "120",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 22
// 	  },
// 	  {
// 		"name": "Paneer Lacha",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "130",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 23
// 	  },
// 	  {
// 		"name": "Mast Mashroom",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "150",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 24
// 	  },
// 	  {
// 		"name": "Special Mix Veg",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "130",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 25
// 	  },
// 	  {
// 		"name": "Paneer Makhani",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "150",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 26
// 	  },
// 	  {
// 		"name": "Cheese Burst",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "200",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 27
// 	  },
// 	  {
// 		"name": "Italian Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "200",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 28
// 	  },
// 	  {
// 		"name": "Gotiya Special Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "250",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 29
// 	  },
// 	  {
// 		"name": "Veg Wrap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 30
// 	  },
// 	  {
// 		"name": "Paneer Wrap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 31
// 	  },
// 	  {
// 		"name": "Cheese Wrap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 32
// 	  },
// 	  {
// 		"name": "Pasta Wrap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "250",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 33
// 	  },
// 	  {
// 		"name": "White Sauce Pasta Wrap",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "250",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 34
// 	  },
// 	  {
// 		"name": "Potato Toast",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 35
// 	  },
// 	  {
// 		"name": "Paneer Toast",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 36
// 	  },
// 	  {
// 		"name": "Punjabi Sandwich",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 37
// 	  },
// 	  {
// 		"name": "Gotiya Special Sandwich",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 38
// 	  },
// 	  {
// 		"name": "Grill Sandwich",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 39
// 	  },
// 	  {
// 		"name": "Pizza Sandwich",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 40
// 	  },
// 	  {
// 		"name": "Hot Dog",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "30",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 41
// 	  },
// 	  {
// 		"name": "Paneer Platter",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 42
// 	  },
// 	  {
// 		"name": "Veg Maggi",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 43
// 	  },
// 	  {
// 		"name": "Butter Maggi",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 44
// 	  },
// 	  {
// 		"name": "Cheese Maggi",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 45
// 	  },
// 	  {
// 		"name": "Special Maggi",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "70",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 46
// 	  },
// 	  {
// 		"name": "Matar Paneer",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "120",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 47
// 	  },
// 	  {
// 		"name": "Paneer Bhurji",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "150",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 48
// 	  },
// 	  {
// 		"name": "Kadhai Paneer",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "150",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 49
// 	  },
// 	  {
// 		"name": "Tomato Soup",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "20",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 50
// 	  },
// 	  {
// 		"name": "Special Butter Tomato Soup",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "30",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 51
// 	  },
// 	  {
// 		"name": "Paneer Momos",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 52
// 	  },
// 	  {
// 		"name": "Chilli Fry Momos",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 53
// 	  },
// 	  {
// 		"name": "Grill Momos",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 54
// 	  },
// 	  {
// 		"name": "Veg Noodles",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 55
// 	  },
// 	  {
// 		"name": "Sweet Corn Noodles",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 56
// 	  },
// 	  {
// 		"name": "Mushroom Noodles",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "70",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 57
// 	  },
// 	  {
// 		"name": "stuff Paneer Kulche",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "30",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 58
// 	  },
// 	  {
// 		"name": "Veg Fried Rice",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 59
// 	  },
// 	  {
// 		"name": "White Sause Pasta",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "100",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 60
// 	  },
// 	  {
// 		"name": "Veg Spring Roll",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 61
// 	  },
// 	  {
// 		"name": "Veg Roll",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "40",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 62
// 	  },
// 	  {
// 		"name": "Pizza Roll",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "70",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 63
// 	  },
// 	  {
// 		"name": "Chilli Potato",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 64
// 	  },
// 	  {
// 		"name": "Honey Chilli Potato",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 65
// 	  },
// 	  {
// 		"name": "Chilli Paneer Dry",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 66
// 	  },
// 	  {
// 		"name": "Chilli Paneer Gravy",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "90",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 67
// 	  },
// 	  {
// 		"name": "Manchurian Dry",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 68
// 	  },
// 	  {
// 		"name": "Manchurian Gravy",
// 		"itemsAvailable": "1",
// 		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpfbQ-_rpI_K9rG9YShZZXEYY9XE7_lcT_g&usqp=CAU",
// 		"fullPrice": "70",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 69
// 	  }
// 	],
// 	"rating": "5",
// 	"discount": "NA",
// 	"delieveryTime": "40 min"
//   }