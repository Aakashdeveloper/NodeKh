const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 9910;
let {dbConnect,getData}  = require('./controller/dbController');


app.get('/',async (req,res) => {
    let query = {};
    let output = await getData('users',query)
    res.send(output)
});

app.get('/subjects',async (req,res) => {
    let query = {};
    let output = await getData('subjects',query)
    res.send(output);
});


app.listen(port,() => {
    dbConnect();
    console.log(`Server is running on port ${port}`)
})
