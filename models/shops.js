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
// 	"name" : "Chinese Fast Food",
// 	"mobileNumber" : "9991234567",
// 	"address":"Near Railway Station",
// 	"image" : "https://previews.123rf.com/images/artisticco/artisticco1701/artisticco170100013/69367031-a-vector-illustration-of-fast-food-restaurant.jpg",
// 	"status" : true,
// "priority" : "3",
// 	"time":"2:00 PM to 8:00 PM",
// 	"description":"Famous for its Chinese Fast Food",
// 	"details" : [{
// 		"name" : "Veg Momos",
// 		"itemsAvailable" : "1",
// 		"image" : "https://instafitness.in/wp-content/uploads/2020/05/keto-momos-recipe.jpg",
// 		"fullPrice":"30",
// 		"halfPrice":"",
// 		"halfAvailable" : false,
// 	 "itemNo" : 1
// 	},
// 	{
// 		"name" : "Veg Noodles",
// 		"itemsAvailable" : "1",
// 		"image" : "https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg",
// 		"fullPrice":"30",
// 		"halfPrice":"",
// 		"halfAvailable" : false,
// 	 "itemNo" : 2
// 	}],
// 	"rating" : "5",
// 	"discount":"NA",
// 	"delieveryTime" : "40 min"
// 	}