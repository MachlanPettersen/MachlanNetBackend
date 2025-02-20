const Signature = require('../models/Signature');

const getAllSignatures = async (req, res) => {
  try {
    const signatures = await Signature.find().sort({ timestamp: -1 });
    res.json(signatures);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching signatures', error: error.message });
  }
};

const createSignature = async (req, res) => {
  try {
    const { image, color } = req.body;
    const signature = new Signature({ image, color });
    await signature.save();
    res.status(201).json(signature);
  } catch (error) {
    res.status(400).json({ message: 'Error creating signature', error: error.message });
  }
};

const deleteSignature = async (req, res) => {
  try {
    const { id } = req.params;
    await Signature.findByIdAndDelete(id);
    res.json({ message: 'Signature deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting signature', error: error.message });
  }
};

module.exports = {
  getAllSignatures,
  createSignature,
  deleteSignature
};
