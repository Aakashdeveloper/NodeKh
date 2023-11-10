let http = require('http');

let server = http.createServer(function(req,res){
    res.write('<h1>Hii from http</h1>');
    res.end()
})

server.listen(7554)

//http://localhost:7554/