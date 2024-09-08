const readAiService = require('./readAiService');
const openAiService = require('./openAiService');
const slackService = require('./slackService');
const logger = require('../utils/logger');

exports.analyzeTranscription = async (transcriptionId) => {
  try {
    // Obtener la transcripción de Read.ai
    const transcription = await readAiService.getTranscription(transcriptionId);

    // Analizar la transcripción con OpenAI
    const impediments = await openAiService.detectImpediments(transcription);

    // Enviar impedimentos a Slack
    if (impediments.length > 0) {
      await slackService.sendImpediments(impediments);
    }

    return impediments;
  } catch (error) {
    logger.error('Error en el servicio de análisis de impedimentos:', error);
    throw error;
  }
};
