import dbConnect from '../../lib/dbConnect';
const Note = require('../../models/Note');

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const notes = await Note.find({});
      res.status(200).json({ success: true, data: notes });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
