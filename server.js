const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); // for parsing application/json

let pass = process.env.PASSWORD;
mongoose.connect(`mongodb+srv://admin:${pass}@cluster0.mgwl11z.mongodb.net/`, {useNewUrlParser: true, useUnifiedTopology: true});

// Create a data schema
const noteSchema = {
    title: String,
    content: String
};

const Note = mongoose.model("Note", noteSchema);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/notes', function(req, res) {
    Note.find({}, function(err, notes){
        if(err) {
            console.log(err);
        } else {
            res.json(notes);
        }
    });
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", function(req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect("/index");
});

app.listen(3000, function() {
    console.log("server is running on port 3000, http://localhost:3000");
});
