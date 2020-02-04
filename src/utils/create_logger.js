const bunyan = require('bunyan');

/**
 * Method for crate logger
 * @return {Logger}
 */
exports.createLogger = () => {
  return bunyan.createLogger({
    src: true,
    name: 'Storage for properties',
    streams: [
      {
        level: 'info',
        stream: process.stdout
      },
      {
        level: 'info',
        path: 'properties.log'
      }
    ]
  });
};