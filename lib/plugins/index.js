'use strict';

var _plugins = [];

/**
 * @class Plugins
 * @memberof API
 * @description Stores the plugins for using in applications. Plugins must be
 * compatible with all types of database or server configurations.
 */
module.exports = {
    register: require('./register')(_plugins),
    get: require('./get')(_plugins),
    Middleware: require('./classes/middleware')
};
