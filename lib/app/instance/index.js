'use strict';

var Store           = require('./store')
,   Namespace       = require('./namespace')
,   AppComponents   = require('./components');

/**
 * @class AppInstance
 * @memberof API
 * @description The main point for generating the application class.
 * Is generated from {@link API.App App}.
 * @param {String} namespace - The namespace of the application
 * @param {String[]} [dependencies] - A list of packages that instance
 * depends
 */
var AppInstance = module.exports = function(namespace, dependencies){

    if(!Namespace.checker(namespace)) throw new Error(
        "Specified namespace is invalid"
    );

    var components = new AppComponents();
    injector(this, components);

    var stores = {
        /**
         * @property configuration
         * @memberof API.AppInstance
         * @type {API.AppInstance.Store}
         * @description The store for static configurations of the instance.
         */
        configuration: new Store(),
        /**
         * @property configuration
         * @memberof API.AppInstance
         * @type {API.AppInstance.Store}
         * @description Stores utilities and executable code.
         */
        utilities: new Store(true)
    };
    injector(this.getComponents(), stores);

    require('./utils')(this, dependencies || []);

    /**
     * @function API.AppInstance#getSkeleton
     * @description Shortcut for long schema skeleton of namespace.
     * @return {Object} The skeleton of the application, including namespaces.
     */
    this.getSkeleton = function(){
        return Namespace.generator(namespace, {}, this.getComponents);
    };

};
