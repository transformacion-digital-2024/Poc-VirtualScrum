const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);

  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'production' ? 'Algo salió mal' : err.message
  });
};
