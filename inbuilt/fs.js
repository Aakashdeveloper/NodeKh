let fs = require('fs');

// fs.writeFile('myfile.txt','NodeJs Text for Code',() => {
//     console.log('File Created')
// })

// fs.appendFile('myCode.txt',`NodeJs line ${Math.floor(Math.random()*10000)}\n`,()=>{
//     console.log('File Appennded')
// })



fs.readFile('db.json','utf-8',(err,data) => {
    if(err) console.log(err);
    console.log(data);
})

// fs.rename('myCode.txt','myCode2.txt',(err)=>{
//     if(err) console.log(err);
//     console.log('File Renamed');
// })

// fs.unlink('myfile.txt',(err) => {
//     if(err) console.log(err)
//     console.log('File Deleted')
// })