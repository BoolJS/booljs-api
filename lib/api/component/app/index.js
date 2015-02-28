'use strict';

var BaseComponent   = require('../base')
,   namespaceMod    = require('./namespace');

module.exports = (function(){

    var instancePool = {};

    /**
     * @member App
     * @memberof API.Component
     * @implements API.Component.BaseComponent
     * @description The main point for generating the application class.
     */
    function App(namespace){

        if(!namespaceMod.checker(namespace)) throw new Error(
            "Specified namespace is invalid"
        );

        var _components = {};

        this.compatibleComponents = function(){
            return [];
        };

        /**
         * @function API.Component.App~components
         * @description Retrieves the instance of application components
         * @returns {Object} The internal components of the application
         */
        var components = function(){
            return _components;
        };

        /**
         * @function API.Component.App#getSkeleton
         * @description Shortcut for long schema skeleton of namespace.
         */
        this.getSkeleton = function(){
            return namespaceMod.generator(namespace, {}, components);
        }

        // Apply Implements
        Interface.ensureImplements(this, BaseComponent);
    }


    /**
     * @member AppSingleton
     * @memberof API.Component
     * @description Serves as point for retrieving applications. Defined itself
     * as a Singleton pool.
     */
    return {
        /**
         * @function API.Component.AppSingleton.listInstances
         * @description List instances in pool.
         * @return {Array} An array with the namespaces of the instances in the
         * pool.
         */
        listInstances: function(){
            return Object.keys(instancePool);
        },
        /**
         * @function API.Component.AppSingleton.getInstance
         * @description Gets instance of an application from the pool.
         * @param {String} namespace - The namespace of the application.
         * @return {App} The application object.
         */
        getInstance: function(namespace){
            if(instancePool[namespace] === undefined){
                var newInstance = new App(namespace);
                instancePool[namespace] = newInstance;
            }
            return instancePool[namespace];
        },
        /**
         * @function API.Component.AppSingleton.removeInstance
         * @description Removes instance of an application from the pool.
         * @param {String} namespace - The namespace of the application.
         */
        removeInstance: function(namespace){
            delete instancePool[namespace];
        }
    };

})();
