const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Note = require('./Note');




//CREATING A NEW NOTE
router.post('/', (req, res) => {
    console.log(req);
    Note.create({
        title: req.body.title,
        message: req.body.message
    }, (err, note) => {
        if (err) return res.status(500).send("There was a problem adding the note");
        res.status(200).send(note);
    });
});

//RETURN ALL NOTES
router.get('/', (req, res) => {
    Note.find({}, (err, notes) => {
        if (err) return res.status(500).send("There was a problem finding all notes");
        res.status(200).send(notes);
    });
});

//DELETES A NOTE 
router.delete('/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id, (err, note) => {
        if (err) return res.status(500).send("There was a problem deleting the note");
        res.status(500).send("Note " + "was deleted");
    });
});

//UPDATING A NOTE
router.put('/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, note) => {
        if (err) return res.status(500).send("There was a problem updating the note");
        res.status(200).send(note);
    });
});

module.exports = router;