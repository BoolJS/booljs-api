'use strict';
var BasePlugin = require('../base');

/**
 * @class Middleware
 * @memberof API
 * @description Middleware defines a middleware to be used in web server
 * settings.
 */
module.exports = class Middleware extends BasePlugin {
    constructor(name, functions, dependants) {
        super(name, functions, [ 'action' ], dependants);
    }
};
