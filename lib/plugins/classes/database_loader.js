'use strict';

var BasePlugin = require('../base');

/**
 * @class DatabaseLoader
 * @memberof API.Plugins
 * @description Generates a new instance to load database drivers.
 */
module.exports = class DatabaseLoader extends BasePlugin {
    constructor(name, functions, dependants) {
        super(name, functions, [ 'openDatabase', 'fetchModels' ], dependants);
    }
};
