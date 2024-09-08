const { WebClient } = require('@slack/web-api');
const logger = require('../utils/logger');

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

exports.sendImpediments = async (impediments) => {
  try {
    const blocks = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Impedimentos detectados en la reunión diaria:*'
        }
      },
      ...impediments.map(imp => ({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `• *${imp.mencionadoPor}*: ${imp.descripcion}`
        }
      }))
    ];

    await slack.chat.postMessage({
      channel: process.env.SLACK_CHANNEL_ID,
      blocks: blocks
    });

    logger.info('Impedimentos enviados a Slack exitosamente');
  } catch (error) {
    logger.error('Error al enviar impedimentos a Slack:', error);
    throw new Error('No se pudieron enviar los impedimentos a Slack');
  }
};
