const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command:"add",
    describe:"Add a new Notes",
    builder: {
       title:{
           type:"string",
           describe:"Enter Note Title",
           demandOption:true
       },
       content :{
           type:"string",
           describe:"Enter Note description",
           demandOption: false
       }
    },
    handler(argv){
        notes.addNote(argv.title,argv.content)
        console.log("Add Command Trigerred!")
    }
});

yargs.command({
    command: "list",
    describe: "Display all notes",
    handler(){
        notes.listNotes()
    }
})

yargs.parse()