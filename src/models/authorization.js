/**
 * Method for create autorization action
 * @param {object} configuration configuration with security info
 * @param logger {Logger}
 * @param {string} password password for authorization
 * @return {Promise}
 */
exports.authorization = (configuration, logger, password = undefined) => {
  return new Promise((resolve, reject) => {
    if (!configuration.security) {
      resolve();
    } else if (configuration.password === password) {
      resolve();
    } else {
      logger.warn('Error in authorization');
      reject();
    }
  });
};