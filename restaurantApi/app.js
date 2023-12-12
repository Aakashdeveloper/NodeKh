const express = require('express');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const PORT = process.env.PORT;

const user = require("./routes/user");
const restaurant = require("./routes/restaurant");
const review = require("./routes/review");

// middleware
app.use(passport.initialize());
require('./passport.js')(passport)
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api/users",user);
app.use("/api/restaurants",restaurant);
app.use("/api/reviews",review);

// connecting db
mongoose.connect(process.env.mongoUrl,{useNewUrlParser:true})
    .then(() => {
        console.log('Database connected...');
    },
    (err) => {
        console.log("Something Wrong in connection....",err);
    }
);

app.get('/',(req,res) => {
    res.json({message:'Api Working'})
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})