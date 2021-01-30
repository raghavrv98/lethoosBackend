const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	name: {
		type: String,
		// required: true,
	},
	mobileNumber: {
		type: String,
		// required: true,		
	},
	address: {
		type: String,
		// required: true,
	},
	image: {
		type: String,
		// required: true,
	},
	status: {
		type: Boolean,
		// required: true,
	},
	time: {
		type: String,
		// required: true,
	},
	description: {
		type: String,
		// required: true,
	},
	details: {
		type: Array,
		// required: true,
	},
	rating: {
		type: String,
		// required: true,
	},
	discount: {
		type: String,
		// required: true,
	},
	deliveryTime: {
		type: String,
		// required: true,
	},
	date: {
		type: Number,
		default: new Date().getTime(),
	}
})

module.exports = mongoose.model('Shops', postSchema);

// {
// 	"name" : "Garg's Bakery",
// 	"mobileNumber" : "1234567890",
// 	"address":"Baldev Ganj, Near Gyasi Halwai",
// 	"image" : "https://previews.123rf.com/images/mknoxgray/mknoxgray1904/mknoxgray190400010/121194154-cake-shop-a-party-without-cake-is-just-a-meeting-cartoon-vector-illustration.jpg",
// 	"status" : true,
// 	"time":"2:00 PM to 8:30 PM",
// 	"description":"Famous for Bakery items and Cakes",
// 	"details" : [],
// 	"rating" : "5",
// 	"discount":"NA",
// 	"delieveryTime" : "40 min"
// 	}


// shop details

// {
// 	"name" : "Chocolate Cake",
// 	"quantity" : "1",
// 	"image" : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F693494.jpg&q=85",
// 	"fullPrice":"350",
// 	"halfPrice":"",
// 	"halfAvailable" : false,
//  "itemNo" : 1
// },
// {
// 	"name" : "Black Forest Cake",
// 	"quantity" : "1",
// 	"image" : "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-classic-black-forest-cake-half-kg--108742-m.jpg",
// 	"fullPrice":"350",
// 	"halfPrice":"",
// 	"halfAvailable" : false
//  "itemNo" : 2
// },

