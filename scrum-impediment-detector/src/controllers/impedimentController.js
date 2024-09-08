const impedimentService = require('../services/impedimentService');
const logger = require('../utils/logger');

exports.analyzeTranscription = async (req, res, next) => {
  try {
    const { transcriptionId } = req.body;
    
    if (!transcriptionId) {
      return res.status(400).json({ error: 'Se requiere el ID de la transcripción' });
    }

    const impediments = await impedimentService.analyzeTranscription(transcriptionId);
    
    res.status(200).json({ impediments });
  } catch (error) {
    logger.error('Error al analizar la transcripción:', error);
    next(error);
  }
};
