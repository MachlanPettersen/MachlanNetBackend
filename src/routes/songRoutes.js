const express = require('express');
const router = express.Router();
const { getAllSuggestions, createSuggestion, deleteSuggestion } = require('../controllers/songController');
const { authenticateAdmin } = require('../middleware/auth');

router.get('/suggestions', getAllSuggestions);
router.post('/suggestions', createSuggestion);
router.delete('/suggestions/:id', authenticateAdmin, deleteSuggestion);

module.exports = router;
