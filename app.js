const express = require('express');

const db = require('./db');

const app = express();

const NotesController = require('./notes/NotesController');


//Using the controller
app.use('/notes', NotesController);

module.exports = app;