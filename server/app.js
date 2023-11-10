let express = require('express');
let app = express();
let port = process.env.PORT || 2311;

app.get('/',(req,res) => {
    res.status(301).send("hii")
})

app.post('/test',(req,res) => {
    res.send("hii")
})

app.listen(port)