const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`);

    for (let i = 0;i<numCPUs;i++){
        cluster.fork();
    }

    cluster.on('exit',(worker,code,singal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork()
    })
}else{
    http.createServer((req,res) =>{
        res.end('Hello Code');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`)
}
