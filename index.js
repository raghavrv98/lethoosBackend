const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const path = require('path');
const cors = require('cors');


//routes
const shopRoutes = require('./routes/api/shops');
const customerLoginRoutes = require('./routes/api/customerLogin');
const orderDetailsRoutes = require('./routes/api/orderDetails');

const app = express();

app.use(cors())

//storage engine

const storage = multer.diskStorage({
	destination: './upload/images',
	filename: (req, file, cb) => {
		console.log('path: ', path);
		return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
	}
})

const upload = multer({
	storage: storage,
	// limits: { fileSize: 10 }
})

// Body parser middlerware

app.use(express.json());

//connect to mongoDB

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

//user routes 

app.use(express.static(path.join(__dirname, "public/build")));
app.get('/', (req, res) => {
	res.render('index')
})
app.get('/login', (req, res) => {
	res.render('index')
})
app.use('/api', shopRoutes);
app.use('/api', customerLoginRoutes);
app.use('/api', orderDetailsRoutes);


app.use('/profile', express.static('upload/images'));
app.post("/upload", upload.single('profile'), (req, res) => {
	res.json({
		success: 1,
		profile_url: `http://localhost:3000/profile/${req.file.filename}`
	})
})

function errHandler(err, req, res, next) {
	if (err instanceof multer.MulterError) {
		res.json({
			success: 0,
			message: err.message
		})
	}
}
app.use(errHandler)

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`server run at port ${PORT}`));
