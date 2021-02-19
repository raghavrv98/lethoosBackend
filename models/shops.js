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
// 	"name": "Food Fusion",
// 	"mobileNumber": "8192095423",
// 	"address": "It's a Virtual Shop",
// 	"image": "https://previews.123rf.com/images/vectorshots/vectorshots1308/vectorshots130800001/21233529-food-shop-cartoon-business-vector-character.jpg",
// 	"status": true,
// 	"priority": "1",
// 	"time": "2:00 PM to 8:00 PM",
// 	"description": "Different Combinations of food including North, South, Italian.",
// 	"details": [
// 	  {
// 		"name": "Half & Half Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://i.ytimg.com/vi/CR17b7Y6rI4/mqdefault.jpg",
// 		"fullPrice": "130",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 1
// 	  },
// 	  {
// 		"name": "Bread Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 2
// 	  },
// 	  {
// 		"name": "Patties Pizza",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 3
// 	  },
// 	  {
// 		"name": "Burgerizza",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 4
// 	  },
// 	  {
// 		"name": "Burgerizza Pro",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "70",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 5
// 	  },
// 	  {
// 		"name": "Cheese Burger",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 6
// 	  },
// 	  {
// 		"name": "Dosa-Idli Combo",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 7
// 	  },
// 	  {
// 		"name": "Burger Combo",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 8
// 	  },
// 	  {
// 		"name": "Chaap & Rumali Roti Combo",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 9
// 	  },
// 	  {
// 		"name": "Manchurian Mix",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "80",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 10
// 	  },
// 	  {
// 		"name": "Potato Spring",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 11
// 	  },
// 	  {
// 		"name": "Fried Rice Manchurian",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "60",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 12
// 	  },
// 	  {
// 		"name": "Veg Momos Noodles",
// 		"itemsAvailable": "1",
// 		"image": "https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/pizza-mojo-sale.jpg",
// 		"fullPrice": "50",
// 		"halfPrice": "",
// 		"halfAvailable": false,
// 		"itemNo": 13
// 	  }
// 	],
// 	"rating": "5",
// 	"discount": "NA",
// 	"delieveryTime": "40 min"
//   }