const express = require('express');
const impedimentController = require('../controllers/impedimentController');

const router = express.Router();

router.post('/analyze-transcription', impedimentController.analyzeTranscription);

module.exports = router;
