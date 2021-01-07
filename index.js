const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const path = require('path');
//routes

const postsRoutes = require('./routes/api/posts');

const app = express();

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

app.use('/api', postsRoutes);


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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server run at port ${PORT}`));