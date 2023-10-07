// models.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = { noteSchema };
