import dbConnect from '../../lib/dbConnect';
const Note = require('../../models/Note'); // Assuming you have a Note model in a `models` directory

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const note = new Note({ title: req.body.title, content: req.body.content });
      await note.save();
      res.status(201).json({ success: true, data: note });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
