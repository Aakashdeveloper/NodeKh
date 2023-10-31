const fs = require('fs');

const sourceStream = fs.createReadStream('myCode2.txt');

const destinationStream = fs.createWriteStream('destination.txt');

sourceStream.pipe(destinationStream);

sourceStream.on('end',() => {
    console.log(`Read Stream Finished`)
})

destinationStream.on('finish',() => {
    console.log(`Write Stream Finished`)
})
