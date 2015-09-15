'use strict';

var BasePlugin = require('../base');

/**
 * @class ServerLoader
 * @description
 */
module.exports = class ServerLoader extends BasePlugin {
    constructor(name, functions, dependents) {
        super(name, functions, [
            'init', 'middleware', 'router', 'boot'
        ], dependents);
    }
};
