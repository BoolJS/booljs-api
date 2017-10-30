'use strict';

var BasePlugin = require('../base');

/**
 * @class ServerLoader
 * @memberof API
 * @augments BasePlugin
 * @description Base class for every server loaders to be plugged-in over
 * bool.js environment
 */
module.exports = class ServerLoader extends BasePlugin {
    constructor (name, dependents) {
        super(name, [
            /**
             * @function API.ServerLoader#init
             * @description Here, the implementer must initialize the
             * application server and return it via Promise to the bootloader.
             * @param {API.AppInstance} _instance - An instance of the
             * currently running application.
             * @return {Promise} A promise containing an application server.
             */
            'init',
            /**
             * @function API.ServerLoader#middleware
             * @description In this function, a Middleware will be loaded into
             * the implementer's application server.
             * @param {API.AppInstance} _instance - An instance of the
             * currently running application.
             * @param {Object} router - The router to be handled
             * @param {Object} middleware - The already verified middleware.
             * @return {Promise} A promise containing an application server.
             */
            'middleware',
            /**
             * @function API.ServerLoader#preroute
             * @description In this function, the implementer must prepare the
             * necessary steps to return a router object to the bootloader. That
             * router will be used in the process of preparing RouteMiddleware
             * as well as routes to retrieve them to the route function.
             * @param {API.AppInstance} _instance - An instance of the
             * currently running application.
             * @param {Object} server - An application server instance.
             * @return {Promise} A promise containing a router.
             */
            'preroute',
            /**
             * @function API.ServerLoader#route
             * @description In this function, the implementer must prepare the
             * necessary steps to return a router object to the bootloader. That
             * router will be used in the process of preparing RouteMiddleware
             * as well as routes to retrieve them to the route function.
             * @param {API.AppInstance} _instance - An instance of the
             * currently running application.
             * @param {Object} router - The router to be handled
             * @param {Function[]} middleware - An array containing the
             * middleware associated to the route.
             * @param {Function} route - The handler for the route.
             * @return {Promise} A promise containing a router.
             */
            'route',
            /**
             * @function API.ServerLoader#postroute
             * @description In this function, the implementer must connect the
             * router to the application server.
             * @param {API.AppInstance} _instance - An instance of the
             * currently running application.
             * @param {Object} server - An application server instance.
             * @param {Object} router - The application's router.
             * @return {Promise} A promise containing an application server.
             */
            'postroute',
            /**
             * @function API.ServerLoader#boot
             * @description The implementer must return a Promise with a simple
             * http server, by using the application server.
             * @return {Promise} A Promise which contains a plain http server.
             */
            'boot'
        ], dependents);
    }
};
