'use strict';

const AppInstance = require('./instance');
const instancePool = {};

/**
 * @class App
 * @memberof API
 * @description Serves as point for retrieving applications. Defined itself
 * as a Singleton pool.
 */
module.exports = {

    /**
     * @function API.App.listInstances
     * @description List instances in pool.
     * @return {String[]} An array with the namespaces of the instances in
     * the pool.
     */
    listInstances: function () {
        return Object.keys(instancePool);
    },
    /**
     * @function API.App.getInstance
     * @description Gets instance of an application from the pool.
     * @param {String} namespace - The namespace of the application.
     * @param {?String[]} dependencies - An array with instance dependencies.
     * When desired, must be referenced at first call to app instance,
     * otherwise, it won't work after.
     * @return {API.Component.AppInstance} The application object.
     */
    getInstance: function (namespace, dependencies) {
        if (instancePool[namespace] === undefined) {
            var newInstance = new AppInstance(namespace, dependencies);
            instancePool[namespace] = newInstance;
        }
        return instancePool[namespace];
    },
    /**
     * @function API.App.removeInstance
     * @description Removes instance of an application from the pool.
     * @param {String} namespace - The namespace of the application.
     */
    removeInstance: function (namespace) {
        delete instancePool[namespace];
    }

};
