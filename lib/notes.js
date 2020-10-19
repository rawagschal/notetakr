const fs = require('fs');
const path = require('path');
// create UUID
const { v4: uuidv4 } = require('uuid');

function writeDatabaseFile (notesArray) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
};

// create new note with unique id
function addNote (newNote, notesArray) {
    newNote.id = uuidv4();
    notesArray.push(newNote);
    writeDatabaseFile(notesArray);
    return newNote;
};

function deleteNote (id, notesArray) {
    // search array for id and delete it 
    const filteredNotesArray = notesArray.filter(note => {
        return note.id !== id;
    });
    // write and return new filtered array
    writeDatabaseFile(filteredNotesArray);
    return filteredNotesArray;
};

//export
module.exports = { addNote, deleteNote };