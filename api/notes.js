const mongoose = require("mongoose");

// Define your note schema and model only if it hasn't been defined yet.
// This prevents "OverwriteModelError" which occurs when the schema is recompiled.
if (!mongoose.models.Note) {
  const noteSchema = new mongoose.Schema({
    title: String,
    content: String
  });
  mongoose.model("Note", noteSchema);
}

const Note = mongoose.model("Note");

module.exports = async (req, res) => {
  try {
    // Connect to MongoDB using the environment variable from Vercel
    const pass = process.env.PASSWORD;
    await mongoose.connect(`mongodb+srv://admin:${pass}@cluster0.mgwl11z.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));
  
    // Fetch notes
    const notes = await Note.find({});

    // Close the MongoDB connection
    await mongoose.connection.close();

    // Send the notes as JSON
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred while fetching notes." });
  }
};
