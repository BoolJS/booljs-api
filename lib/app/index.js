'use strict';

var AppInstance     = require('./instance')
,   instancePool    = {};

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
    listInstances: function(){
        return Object.keys(instancePool);
    },
    /**
     * @function API.App.getInstance
     * @description Gets instance of an application from the pool.
     * @param {String} namespace - The namespace of the application.
     * @return {API.Component.AppInstance} The application object.
     */
    getInstance: function(namespace){
        if(instancePool[namespace] === undefined){
            var newInstance = new AppInstance(namespace);
            instancePool[namespace] = newInstance;
        }
        return instancePool[namespace];
    },
    /**
     * @function API.App.removeInstance
     * @description Removes instance of an application from the pool.
     * @param {String} namespace - The namespace of the application.
     */
    removeInstance: function(namespace){
        delete instancePool[namespace];
    }

};
