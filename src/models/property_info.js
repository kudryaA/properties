const { existsSync } = require('fs');

/**
 * Get information about properties
 * @param {string} directory path to directory with properties
 * @param {string} property property
 * @return path to property and exists property
 */
exports.getPropertyInfo = (directory, property) => {
  const fileName = `${property}`;
  const path = `${directory}/${fileName}`;
  return {
    path,
    exists: existsSync(path)
  };
};