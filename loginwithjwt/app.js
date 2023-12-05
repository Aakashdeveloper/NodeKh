const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const db = require('./db.js')
const AuthContoller = require('./controller/AuthController');
const port = process.env.PORT || 5001;

app.use(cors());
app.use('/api/auth',AuthContoller);

app.listen(port,() => {
    console.log(`Listing to Port ${port}`)
});
