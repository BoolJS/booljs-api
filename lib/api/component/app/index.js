'use strict';

var BaseComponent   = require('../base')
,   namespaceMod    = require('./namespace');

module.exports = (function(){

    var instancePool = {};

    /**
     * @class AppInstance
     * @memberof API.Component
     * @augments API.Component.BaseComponent
     *
     * @description The main point for generating the application class.
     * Is generated from AppSingleton
     */
    function AppInstance(namespace){

        if(!namespaceMod.checker(namespace)) throw new Error(
            "Specified namespace is invalid"
        );

        var _components = {};

        /** @inheritdoc */
        this.compatibleComponents = function(){
            return [];
        };

        /**
         * @function API.Component.AppInstance~components
         * @description Retrieves the instance of application components
         * @returns {Object} The internal components of the application
         */
        var components = function(){
            return _components;
        };

        /**
         * @function API.Component.AppInstance#getSkeleton
         * @description Shortcut for long schema skeleton of namespace.
         */
        this.getSkeleton = function(){
            return namespaceMod.generator(namespace, {}, components);
        }

        // Apply Implements
        Interface.ensureImplements(this, BaseComponent);
    }


    /**
     * @class App
     * @memberof API.Component
     * @description Serves as point for retrieving applications. Defined itself
     * as a Singleton pool.
     */
    return {
        /**
         * @function API.Component.App.listInstances
         * @description List instances in pool.
         * @return {String[]} An array with the namespaces of the instances in
         * the pool.
         */
        listInstances: function(){
            return Object.keys(instancePool);
        },
        /**
         * @function API.Component.App.getInstance
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
         * @function API.Component.App.removeInstance
         * @description Removes instance of an application from the pool.
         * @param {String} namespace - The namespace of the application.
         */
        removeInstance: function(namespace){
            delete instancePool[namespace];
        }
    };

})();
