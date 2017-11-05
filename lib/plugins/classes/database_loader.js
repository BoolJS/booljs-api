'use strict';

var BasePlugin = require('../base');

/**
 * @class DatabaseLoader
 * @augments BasePlugin
 * @memberof API
 * @description Generates a new instance to load database drivers.
 */
module.exports = class DatabaseLoader extends BasePlugin {
    constructor (name, dependants) {
        super(name, [
            /**
             * @function API.DatabaseLoader#openDatabase
             * @description Takes connection parameters to open a database
             * connection.
             * @param {Object} configuration - The configuration parameters.
             * @return {Promise}
             */
            'openDatabase',
            /**
             * The class that describes if a model object is made for the driver.
             * @var {API.DatabaseModel} modelClass
             * @memberof API.DatabaseLoader
             */
            'modelClass',
            /**
             * @function API.DatabaseLoader#fetchModels
             * @description Opens the models.
             * @param {AppInstance} instance - The application's instance.
             * @param {Object} name - A string containing the model's component
             * class name.
             * @param {Object} Component - A {@link Component} inhereted class,
             * representing the model.
             * @param {Object} connection - A connection to database.
             * @return {Promise}
             */
            'fetchModels',
            /**
             * @function API.DatabaseLoader#modelTemplate
             * @description Retrieves a template for a new model.
             * @return {String} The model template.
             */
            'modelTemplate',
            /**
             * @function API.DatabaseLoader#modelConfiguration
             * @description Retrieves a template for a new configuration
             * file.
             * @return {String} The configuration template.
             */
            'modelConfiguration'
        ], dependants);
    }
};
