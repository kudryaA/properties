const Hapi = require('@hapi/hapi');


/**
 * Method for create hapi.js server
 * @param {object} configuration configuration of service
 * @return {Hapi} hapi server
 */
exports.createServer = (configuration) => {
    const host = configuration.host;
    const port = configuration.port;
    return Hapi.server({
        port,
        host
    });
};