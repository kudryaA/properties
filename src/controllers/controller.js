const { authorization } = require('./../models/authorization');
const { CronJob } = require('cron');
const { SetQueue } = require('./../models/set_queue');
const { getProperties } = require('./../models/get_properties');

/**
 * Create controller
 * @param server hapijs server
 * @param logger {Logger}
 * @param {object} configuration all configuration
 */
exports.createController = (server, logger, configuration) => {
  const setQueue = new SetQueue(configuration);
  server.route({
    method: 'POST',
    path: '/set',
    handler: (request, h) => {
      logger.info(`Request to /set`);
      return authorization(configuration, logger).then(() => {
        const key = request.payload.key;
        const value = request.payload.value;
        setQueue.add(key, value);
        return {
          status: true
        };
      }, () => {
        return {
          status: false,
          comment: 'Authorization error'
        };
      });
    }
  });

  server.route({
    method: 'POST',
    path: '/get',
    handler: (request, h) => {
      logger.info(`Request to /get`);
      return authorization(configuration, logger).then(() => {
        const key = request.payload.key;
        const property = getProperties(configuration, key);
        if (property) {
          return {
            status: true,
            value: property
          };
        } else {
          return {
            status: false,
            comment: `Not found property ${key}`
          };
        }
      }, () => {
        return {
          status: false,
          comment: 'Authorization error'
        };
      });
    }
  });
  new CronJob('* * * * * *', () => {
    setQueue.resolve();
    //logger.info('Queue of setting properties is resolved!');
  }, null, true, 'America/Los_Angeles');
};