const { mkdirSync, existsSync } = require('fs');

/**
 * Mkdir if folder is not exists
 * @param {string} path
 */
exports.mkdir = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
};