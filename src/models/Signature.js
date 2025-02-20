const mongoose = require('mongoose');

const signatureSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Signature', signatureSchema);
