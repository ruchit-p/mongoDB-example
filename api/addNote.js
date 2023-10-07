// /api/addNote.js
const mongoose = require('mongoose');
//... MongoDB setup
const Note = mongoose.model("Note", noteSchema);

module.exports = async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  await newNote.save();
  res.json({status: 'Note added'});
};
