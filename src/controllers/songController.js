const SongSuggestion = require('../models/SongSuggestion');

const getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await SongSuggestion.find().sort({ timestamp: -1 });
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching suggestions', error: error.message });
  }
};

const createSuggestion = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const suggestion = new SongSuggestion({ title, artist });
    await suggestion.save();
    res.status(201).json(suggestion);
  } catch (error) {
    res.status(400).json({ message: 'Error creating suggestion', error: error.message });
  }
};

const deleteSuggestion = async (req, res) => {
  try {
    const { id } = req.params;
    await SongSuggestion.findByIdAndDelete(id);
    res.json({ message: 'Suggestion deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting suggestion', error: error.message });
  }
};

module.exports = {
  getAllSuggestions,
  createSuggestion,
  deleteSuggestion
};
