const { setProperties } = require('./set_properties');

/**
 * Class for controlling writing conflict
 */
exports.SetQueue = class {
  /**
   * Constructor
   * @param {Object} configuration service configuration
   */
  constructor(configuration) {
    this.configuration = configuration;
    this.queue = [];
  }

  /**
   * Method for add data
   * @param {string} key 
   * @param {Object} value
   */
  add(key, value) {
    this.queue.push({
      key,
      value
    });
  }

  /**
   * Resolve queue
   */
  resolve() {
    this.queue.forEach(property => {
      setProperties(this.configuration, property.key, property.value);
    });
  }
};