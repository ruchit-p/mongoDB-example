// addNote.js
const mongoose = require('mongoose');
const { noteSchema } = require('../../lib/models');


const Note = mongoose.model('Note', noteSchema);

// rest of your code
