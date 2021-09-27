const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/authentication');
const gameRoute = require('./routes/gameIndex');

dotenv.config();

//Connect to database
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connect to DB!')
);

//Middleware
app.use(express.json());

//Route Middlewares


app.use('/api/user', authRoute);
app.use('/api/game', gameRoute);

app.listen(PORT, (err) => {
    console.log(`Server is running on ${PORT}!`)
})