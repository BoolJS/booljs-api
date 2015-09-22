'use strict';

var BasePlugin = require('../base');

/**
 * @class ServerLoader
 * @description Base class for every server loaders to be plugged-in over
 * bool.js environment
 */
module.exports = class ServerLoader extends BasePlugin {
    constructor(name, functions, dependents) {
        super(name, functions, [
            'init', 'middleware', 'router', 'boot'
        ], dependents);
    }
};
