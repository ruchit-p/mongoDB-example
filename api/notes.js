// /api/notes.js
const mongoose = require('mongoose');
//... MongoDB setup
const Note = mongoose.model("Note", noteSchema);

module.exports = async (req, res) => {
  const notes = await Note.find({});
  res.json(notes);
};
