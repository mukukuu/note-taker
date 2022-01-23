const router = require('express').Router();

const notebook = require('../db/db.json');




//request notebook
router.get('./notes', (req, res) => {
    notebook.getnotes() 
    .then(notes => {res.json(notes)})
    .catch(err => {res.status(500).json(err)})
});

//response 
router.post('/notes', (req, res) => {
    notebook
    .addNote(req.body)
    .then(note => {res.json(note)})
    .catch(err => {res.status(500).json(err)})
})

//delete note
router.delete('/notes/:id', (req, res) => {
    nootbook
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
})


module.exports = router;