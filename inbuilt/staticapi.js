let http = require('http');
let fs = require('fs');
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 1221;

let server = http.createServer((req,res) => {
    fs.readFile('db.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port,() => {
    console.log(`Running on port ${port}`)
})