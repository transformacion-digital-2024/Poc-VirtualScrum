const { Configuration, OpenAIApi } = require('openai');
const logger = require('../utils/logger');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.detectImpediments = async (transcription) => {
  try {
    const prompt = `
      Analiza la siguiente transcripción de una reunión diaria de Scrum e identifica posibles impedimentos o problemas mencionados por el equipo:

      ${transcription}

      Lista los impedimentos encontrados en formato JSON, donde cada impedimento es un objeto con las propiedades "descripcion" y "mencionadoPor".
    `;

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      max_tokens: 500,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    const impedimentsText = response.data.choices[0].text.trim();
    return JSON.parse(impedimentsText);
  } catch (error) {
    logger.error('Error al detectar impedimentos con OpenAI:', error);
    throw new Error('No se pudieron detectar impedimentos');
  }
};
