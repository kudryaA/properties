const { createLogger } = require('./utils/create_logger');
const { createServer } = require('./utils/create_server');
const { getConfiguration } = require('./utils/read_configuration');
const { createController } = require('./controllers/controller');
const { mkdir } = require('./utils/mkdir');

/**
 * Initial service function
 */
async function init () {
  const logger = createLogger();
  const configuration = getConfiguration('configuration.yml');
  const server = createServer(configuration);
  mkdir(configuration.propertiesPath);
  createController(server, logger, configuration);
  await server.start();
  logger.info(`Server are started on host ${configuration.host} and port ${configuration.port}!`);
}

init();