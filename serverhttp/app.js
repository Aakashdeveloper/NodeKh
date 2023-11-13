let http = require('http');

//req
//res

let server = http.createServer(function(req,res){
    let url = req.url;
    console.log(url)
    let out = ''
    if(url === "/"){
        out = '<h1>Hii From Home Page</h1>'
    }else if(url === "/products"){
        out = '<h1>Hii From Products Page</h1>'
    }else{
        out = '<h1>Not Found</h1>'
    }
    res.write(out);
    res.end();
})

server.listen(8222)