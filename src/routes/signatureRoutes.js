const express = require('express');
const router = express.Router();
const { getAllSignatures, createSignature, deleteSignature } = require('../controllers/signatureController');
const { authenticateAdmin } = require('../middleware/auth');

router.get('/signatures', getAllSignatures);
router.post('/signatures', createSignature);
router.delete('/signatures/:id', authenticateAdmin, deleteSignature);

module.exports = router;
