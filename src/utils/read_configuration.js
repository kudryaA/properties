const { parse } = require('yaml');
const { existsSync, readFileSync } = require('fs');

/**
 * Method for get configuration
 * @param {string} path path to yaml file with configuration
 * @return {Object} configuration for server
 */
exports.getConfiguration = (path) => {
  const result = {
    host: '0.0.0.0',
    port: 4040,
    security: false,
    propertiesPath: 'config'
  };
  if (existsSync(path)) {
    const text = readFileSync(path, 'utf-8');
    const yaml = parse(text);
    result.host = yaml.host || result.host;
    result.port = yaml.port || result.port;
    if (yaml.security && yaml.password) {
      result.security = true;
      result.password = yaml.password;
    }
  }
  return result;
};