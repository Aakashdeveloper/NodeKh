const net = require('net');
const fs = require("fs");

const PORT = 3000;
const receivedFilePath = "./received_file.txt";

const server = net.createServer((socket) => {
    console.log('Clinet Connected');

    const fileStream = fs.createWriteStream(receivedFilePath);

    socket.on("data",(data) => {
        fileStream.write(data);
    })

    socket.on("end" ,() => {
        console.log("File Recived successfully");
        fileStream.end();
        socket.destroy();
    })

    socket.on("error",(err) => {
        console.log("An Error Occured : ",err);
        fileStream.end();
        socket.destroy()
    })
})

server.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})