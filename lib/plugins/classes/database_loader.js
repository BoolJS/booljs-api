'use strict';

/**
 * @class DatabaseLoader
 * @memberof API.Plugins
 * @description Generates a new instance to load database drivers.
 */
module.exports = class DatabaseLoader {
    constructor(name, functions, dependents) {
        this.name = name;
        this.functions = functions;
        this.dependents = dependents;
    }

    openDatabase(_instance, configuration) {
        return this.functions.openDatabase(_instance, configuration);
    }

    fetchModels(_instance, models, connection) {
        return this.functions.fetchModels(_instance, models, connection);
    }
};
