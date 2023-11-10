const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,content) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({title:title,content:content})
        saveNotes(notes);
        console.log(chalk.green("Notes Added"))
    }else{
        console.log(chalk.red.inverse("Duplicate note found"))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length === 0){
        console.log(chalk.red("No Notes Found"))
    }else{
        console.log(chalk.yellow.inverse("Your Notes : "));
        notes.forEach((note) => {
            console.log(
                chalk.blue.bold(note.title),
                chalk.magenta(note.content)
            )
        })
    }
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}

module.exports = {
    loadNotes:loadNotes,
    saveNotes:saveNotes,
    addNote:addNote,
    listNotes:listNotes
}