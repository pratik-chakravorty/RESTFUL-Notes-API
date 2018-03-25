const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: String,
    message: String
});

mongoose.model('Note', NoteSchema);

module.exports = mongoose.model('Note');

