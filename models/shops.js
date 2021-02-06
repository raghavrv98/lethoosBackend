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
	priority: {
		type: String,
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
// 	"name" : "Chaska Family Restaurant",
// 	"mobileNumber" : "9999999999",
// 	"address":"Bhagwati Road",
// 	"image" : "https://previews.123rf.com/images/dmitrymoi/dmitrymoi1702/dmitrymoi170200016/71707598-restaurant-or-cafe-exterior-building-vector-cartoon-illustration.jpg",
// 	"status" : true,
// 	"time":"2:00 PM to 8:30 PM",
// 	"description":"All Food are at one Restaurant",
// 	"details" : [{
// 		"name" : "Masala Dosa",
// 		"itemsAvailable" : "1",
// 		"image" : "https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg",
// 		"fullPrice":"40",
// 		"halfPrice":"",
// 		"halfAvailable" : false,
// 	 "itemNo" : 1
// 	},
// 	{
// 		"name" : "Cheese Pizza",
// 		"itemsAvailable" : "1",
// 		"image" : "https://tummytrip.com/wp-content/uploads/2019/12/Cheese-Pizza-500x375.jpg",
// 		"fullPrice":"150",
// 		"halfPrice":"",
// 		"halfAvailable" : false
// 	 "itemNo" : 2
// 	}],
// 	"rating" : "5",
// 	"discount":"NA",
// 	"delieveryTime" : "40 min"
// 	}