const router = require('express').Router();
let notes = require('../db/db.json');
const { addNote, deleteNote } = require('../lib/notes');

// return notes from db.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

// add notes to server/db.json
router.post('/notes', (req, res) => {
    const newNote = addNote( req.body, notes);
    res.json(newNote);
});

// delete notes from server/db.json
router.delete('/notes/:id', (req, res) => {
    const newNotes = deleteNote(req.params.id, notes);
    res.json(newNotes);
    notes = newNotes;
});

// export
module.exports = router;
