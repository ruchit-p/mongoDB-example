// /api/addNote.js
const mongoose = require('mongoose');
require('dotenv').config();

const { noteSchema } = require('../../lib/models');

const Note = mongoose.model('Note', noteSchema);

const dbPassword = process.env.PASSWORD;
mongoose.connect(`mongodb+srv://admin:${dbPassword}@cluster0.mgwl11z.mongodb.net/`, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });

    newNote.save((err) => {
        if (err) {
            res.status(500).json({error: 'Failed to save note'});
        } else {
            res.status(200).json({message: 'Note added successfully'});
        }
    });
};
