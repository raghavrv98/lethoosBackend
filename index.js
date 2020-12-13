const express = require('express')
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')

//routes

const postsRoutes = require('./routes/api/posts');

const app = express();


// Body parser middlerware

app.use(express.json());

//connect to mongoDB

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

//user routes 

app.use('/api', postsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server run at port ${PORT}`));