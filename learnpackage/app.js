//let http = require('http');
import http from 'http'

let server = http.createServer((req,res) => {
    res.write('Hii From Nodejs');
    res.end()
})

server.listen(4322)