module.exports = async (req, res) => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      await mongoose.connection.close();
      res.status(200).json({ status: 'ok' });
    } catch (error) {
      console.error('DB Connection Error:', error);
      res.status(500).json({ status: 'error', error: 'DB Connection Failed' });
    }
  };
  