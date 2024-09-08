const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
