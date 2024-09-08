const axios = require('axios');
const logger = require('../utils/logger');

const READ_AI_API_URL = 'https://api.read.ai/v1'; // Asegúrate de que esta sea la URL correcta

exports.getTranscription = async (transcriptionId) => {
  try {
    const response = await axios.get(`${READ_AI_API_URL}/transcriptions/${transcriptionId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.READ_AI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.transcript;
  } catch (error) {
    logger.error('Error al obtener la transcripción de Read.ai:', error);
    throw new Error('No se pudo obtener la transcripción de Read.ai');
  }
};
