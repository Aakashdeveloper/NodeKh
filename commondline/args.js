const args = process.argv.slice(2)
//console.log(args)
if(args.length == 0){
    console.log("Hello User")
}else{
    console.log(`Hello ${args[0]}` )
}