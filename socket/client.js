const net = require('net');
const fs = require('fs');

const SERVER_HOST = "localhost";
const SERVER_PORT = 3000;
const sendFile = "./file_to_send.txt";

const fileStream = fs.createReadStream(sendFile);

const client = net.createConnection(SERVER_PORT, SERVER_HOST,() => {
    console.log("Connted to server");

    fileStream.pipe(client);
})


fileStream.on("end",() => {
    console.log("File Sent Successfully");
})


fileStream.on("error",(err) => {
    console.log("An Error occurred : ",err)
})

client.on("error",(err) => {
    console.log("An error occured : ",err);
    client.end()
})

