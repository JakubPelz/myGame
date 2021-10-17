const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const cors = require('cors');

//Cors
app.use(cors());
//Import Routes
const authRoute = require('./routes/authentication');
const gameRoute = require('./routes/gameIndex');
const usersRoute = require('./routes/get/getUsers');

dotenv.config();

//Monogo

const mongoose = require('mongoose');
require("dotenv").config();

mongoose
.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

//Middleware
app.use(express.json());

//Route Middlewares


app.use('/api/user', authRoute);
app.use('/api/game', gameRoute);
app.use('/', usersRoute);

app.listen(PORT, (err) => {
    console.log(`Server is running on ${PORT}!`)
    
})