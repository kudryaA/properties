const { writeFileSync } = require('fs');
const { getPropertyInfo } = require('./property_info');

/**
 * Method for store properties
 * @param {object} configuration
 * @param {string} key property
 * @param {object} value value for storage
 */
exports.setProperties = (configuration, key, value) => {
  const { path } = getPropertyInfo(configuration.propertiesPath, key);
  writeFileSync(path, value, 'utf-8');
};