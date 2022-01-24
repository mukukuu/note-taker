const router = require('express').Router();
const notebook = require('../db/notebook');

//request notebook
router.get('/notes', (req, res) => {
    notebook.getNotes() 
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
    notebook
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err))
})


module.exports = router;