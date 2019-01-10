const express = require('express');

//gets stuff from the db
const db = require('./db');

const app = express();

//follows the mvc pattern here.
const NotesController = require('./notes/NotesController');


//Using the controller
app.use('/notes', NotesController);

module.exports = app;