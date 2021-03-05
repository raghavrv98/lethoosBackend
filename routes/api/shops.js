const express = require('express');
const router = express.Router();
const moment = require('moment');
var cron = require('node-cron');
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
		if (!post) throw Error('Something went wrong while creating the shop');
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
		if (!post) throw Error('Something went wrong while updating the profile!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

//Status Change for Shops (Open)

router.patch('/shopStatus/open', async (req, res) => {
	const updatePost = new Shops(req.body);
	try {
		const post = await Shops.updateMany({
			$set: { "status": true }
		});
		if (!post) throw Error('Something went wrong while opening the shop!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});

//Status Change for Shops (Close)

router.patch('/shopStatus/close', async (req, res) => {
	const updatePost = new Shops(req.body);
	try {
		const post = await Shops.updateMany({
			$set: { "status": false }
		});
		if (!post) throw Error('Something went wrong while closing the shop!');
		res.status(200).json({ success: true });
	}
	catch (err) {
		res.status(400).json({ msg: err })
	}
});



// cron job schedule for shop open

cron.schedule('00 14 * * *', async () => {
	try {
		const post = await Shops.updateMany({
			$set: { "status": true }
		});
		console.log("Shop Open");
	}
	catch (err) {
		console.log('err: job failed for closing shop ', err);
	}

});

// cron job schedule for shop closed

cron.schedule('00 20 * * *', async () => {
	try {
		const post = await Shops.updateMany({
			$set: { "status": false }
		});
		console.log("Shop Closed");
	}
	catch (err) {
		console.log('err: job failed for closing shop ', err);

	}

});


module.exports = router;

// {
// 	"name": "Chaska Family Restaurant",
// 	"mobileNumber": "7015510259",
// 	"address": "Bhagwati Road, Near Subhash Park",
// 	"image": "https://cdn5.vectorstock.com/i/1000x1000/87/54/welcome-to-hotel-cartoon-poster-vector-19788754.jpg",
// 	"status": true,
// 	"priority": "14",
// 	"time": "2:00 PM to 8:00 PM",
// 	"description": "All Foods are at one Restaurant, including South Indian, Chinese, North Indian.",
// 	"details": [
// 		{
// 			"name": "Plain Patties",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "15",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 1
// 		  },{
// 			"name": "Veg Patties",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "25",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 2
// 		  },{
// 			"name": "Cream Patties",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "25",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 3
// 		  },{
// 			"name": "Veg Burger",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "25",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 4
// 		  },{
// 			"name": "Pizza Patties",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 5
// 		  },{
// 			"name": "Paneer Patties",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 6
// 		  },{
// 			"name": "Plain Maggi",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 7
// 		  },{
// 			"name": "Veg Chowmein",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 8
// 		  },{
// 			"name": "Veg Momos",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "40",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 9
// 		  },{
// 			"name": "Paneer Momos",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 10
// 		  },{
// 			"name": "Paneer Chowmein",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 11
// 		  },{
// 			"name": "Finger Chips",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 12
// 		  },{
// 			"name": "SingaPuri Chowmein",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 13
// 		  },{
// 			"name": "Manchurian Dry",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 14
// 		  },{
// 			"name": "Gobhi Manchurian",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 15
// 		  },{
// 			"name": "Chilli Potato",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 16
// 		  },{
// 			"name": "Honey Chilli Potato",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 17
// 		  },{
// 			"name": "Chilli Paneer Dry",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 18
// 		  },{
// 			"name": "Fried Rice",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 19
// 		  },{
// 			"name": "Chilli Paneer Gravy",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "90",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 20
// 		  },{
// 			"name": "Tomato Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 21
// 		  },{
// 			"name": "Onion Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 22
// 		  },{
// 			"name": "Capsicum Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "110",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 23
// 		  },{
// 			"name": "Sweet Corn Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 24
// 		  },{
// 			"name": "Mix Veg",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "110",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 25
// 		  },{
// 			"name": "Baby Corn Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 26
// 		  },{
// 			"name": "Paneer Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 27
// 		  },{
// 			"name": "Overloaded Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "180",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 28
// 		  },{
// 			"name": "Tandoori Pizza",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "180",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 29
// 		  },{
// 			"name": "Spring Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 30
// 		  },{
// 			"name": "Veg Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "40",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 31
// 		  },{
// 			"name": "Egg Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 32
// 		  },{
// 			"name": "Paneer Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 33
// 		  },{
// 			"name": "Soya Tikka Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 34
// 		  },{
// 			"name": "Mushroom Tikka Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 35
// 		  },{
// 			"name": "Mix Roll",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 36
// 		  },{
// 			"name": "Plain Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 37
// 		  },{
// 			"name": "Masala Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "40",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 38
// 		  },{
// 			"name": "Mushroom Masala Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 39
// 		  },{
// 			"name": "Paneer Masala Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 40
// 		  },{
// 			"name": "Mushroom Paneer Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 41
// 		  },{
// 			"name": "Rava Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 42
// 		  },{
// 			"name": "Veg Noodle Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 43
// 		  },{
// 			"name": "Spring Roll Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 44
// 		  },{
// 			"name": "Pizza Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "120",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 45
// 		  },{
// 			"name": "Palak Masala Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "120",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 46
// 		  },{
// 			"name": "Palak Paneer Dosa",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 47
// 		  },{
// 			"name": "Idli Sambhar",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "40",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 48
// 		  },{
// 			"name": "Veg Idli Sambhar",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 49
// 		  },{
// 			"name": "Paneer Idli Sambhar",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 50
// 		  },{
// 			"name": "Sambhar vada",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 51
// 		  },{
// 			"name": "Plain Uttapam",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 52
// 		  },{
// 			"name": "Veg Uttapam",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 53
// 		  },{
// 			"name": "Onion Uttapam",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 54
// 		  },{
// 			"name": "Tomato Uttapam",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 55
// 		  },
// 		  {
// 			"name": "Paneer Uttapam",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 56
// 		  },{
// 			"name": "Potato Ball",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "90",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 57
// 		  },{
// 			"name": "Hara Bhara Kebab",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "90",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 58
// 		  },{
// 			"name": "Cheese Balls",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 59
// 		  },{
// 			"name": "Veg Cutlet",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 60
// 		  },{
// 			"name": "Paneer Tikka",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "140",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 61
// 		  },{
// 			"name": "Veg Seekh Kebab",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 62
// 		  },{
// 			"name": "Tandoori Chaap",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 63
// 		  },{
// 			"name": "Malai Chaap",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 64
// 		  },{
// 			"name": "Afghani Chaap",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 65
// 		  },{
// 			"name": "Achari Chaap",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 66
// 		  },{
// 			"name": "Paneer Haryali Tikka",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 67
// 		  },{
// 			"name": "Mushroom Tikka",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 68
// 		  },{
// 			"name": "Roasted Papad",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "10",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 69
// 		  },{
// 			"name": "Masala Papad",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "15",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 70
// 		  },{
// 			"name": "Kachumbar Salad",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 71
// 		  },{
// 			"name": "Pyaz Salad",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 72
// 		  },{
// 			"name": "Green Salad",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "40",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 73
// 		  },{
// 			"name": "Chach Sweet/Salted",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "20",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 74
// 		  },{
// 			"name": "Plain Dahi",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "30",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 75
// 		  },{
// 			"name": "Plain Raita",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "40",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 76
// 		  },{
// 			"name": "Boondi Raita",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 77
// 		  },{
// 			"name": "Lassi Sweet/Salted",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 78
// 		  },{
// 			"name": "Pineapple Raita",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 79
// 		  },{
// 			"name": "Mix Fruit Raita",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 80
// 		  },{
// 			"name": "Mix Raita",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 81
// 		  },{
// 			"name": "Daal Fry",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 82
// 		  },{
// 			"name": "Aloo Jeera",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "90",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 83
// 		  },{
// 			"name": "Kashmiri Dum Aloo",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 84
// 		  },{
// 			"name": "Kashmiri Dum Aloo",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 85
// 		  },{
// 			"name": "Mix Veg",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 86
// 		  },{
// 			"name": "Aloo Gobhi Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "120",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 87
// 		  },{
// 			"name": "Dal Makhani",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 88
// 		  },{
// 			"name": "Chole Chana Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 89
// 		  },{
// 			"name": "Rajma Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 90
// 		  },{
// 			"name": "Aloo Matar Gravy",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "130",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 91
// 		  },{
// 			"name": "Gravy Chaap",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "140",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 92
// 		  },{
// 			"name": "Shahi Paneer",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 93
// 		  },{
// 			"name": "Matar Mushroom",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 94
// 		  },{
// 			"name": "Matar Paneer",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 95
// 		  },{
// 			"name": "Achari Chaap Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "150",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 96
// 		  },{
// 			"name": "Kadhai Paneer",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 97
// 		  },{
// 			"name": "Paneer Butter Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 98
// 		  },{
// 			"name": "Kadhai Mushroom",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 99
// 		  },{
// 			"name": "Handi Paneer",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 100
// 		  },{
// 			"name": "Palak Paneer",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 101
// 		  },{
// 			"name": "Achari Paneer",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 102
// 		  },{
// 			"name": "Mushroom Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "180",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 103
// 		  },{
// 			"name": "Special Chaap Masala",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "190",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 104
// 		  },{
// 			"name": "Plain Roti",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "5",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 105
// 		  },{
// 			"name": "Butter Roti",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "7",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 106
// 		  },{
// 			"name": "Plain Naan",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "15",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 107
// 		  },{
// 			"name": "Missi Roti",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "20",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 108
// 		  },{
// 			"name": "Butter Naan",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "20",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 109
// 		  },{
// 			"name": "Plain Rice",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "50",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 110
// 		  },{
// 			"name": "Jeera Rice",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 111
// 		  },{
// 			"name": "Kadhai Mushroom",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "160",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 112
// 		  },{
// 			"name": "Veg Pulav",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "60",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 113
// 		  },{
// 			"name": "Chole Rice",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 114
// 		  },{
// 			"name": "Rajma Rice",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "70",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 115
// 		  },{
// 			"name": "Veg Biryani",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "80",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 116
// 		  },{
// 			"name": "Hyderabadi Biryani",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 117
// 		  },{
// 			"name": "Peas Pulav",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "100",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 118
// 		  },{
// 			"name": "Paneer Pulav",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "110",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 119
// 		  },{
// 			"name": "Shahi Pulav",
// 			"itemsAvailable": "1",
// 			"image": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.jpg",
// 			"fullPrice": "110",
// 			"halfPrice": "",
// 			"halfAvailable": false,
// 			"itemNo": 120
// 		  }
// 		],
// 	"rating": "5",
// 	"discount": "NA",
// 	"delieveryTime": "40 min"
// }