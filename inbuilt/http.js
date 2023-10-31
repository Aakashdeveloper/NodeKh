let http = require('http');

//req > what we send to server(params,queryParams,body)
//res > what we get from server

let server = http.createServer((req,res) => {
    res.write('<h1>Hii From Node Server Code</h1>');
    res.end()
})

server.listen(7655)