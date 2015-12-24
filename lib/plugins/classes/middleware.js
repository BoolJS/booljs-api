'use strict';
var BasePlugin = require('../base');

/**
 * @class Middleware
 * @memberof API
 * @augments BasePlugin
 * @description Middleware defines a middleware to be used in web server
 * settings.
 */
module.exports = class Middleware extends BasePlugin {
    constructor(name, functions, dependants, extras) {
        var required = _.union([
            /**
             * @function API.Middleware#action
             * @description Describes an action to be executed
             * @param {API.AppInstance} _instance - An instance of the
             * currently running application.
             * @param {API.Router} router - The router object. Allows middleware
             * create new routes.
             * @param {API.Route} [route] - A route object. Describes the
             * definition of a route.
             * @return {Function} A Connect.js middleware
             */
            'action'
        ], extras || []);
        super(name, functions, required, dependants);
    }
};
