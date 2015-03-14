'use strict';

var Store           = require('./store')
,   Namespace       = require('./namespace')
,   AppComponents   = require('./components');

/**
 * @class AppInstance
 * @memberof API
 * @description The main point for generating the application class.
 * Is generated from {@link API.App App}.
 */
var AppInstance = module.exports = function(namespace, types){

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
         * @description Stores utilities and executable code. Not including
         * loaders, which must be declared in the loaders store outside the app
         * instance.
         */
        utilities: new Store(true)
    };
    injector(this.getComponents(), stores);

    /**
     * @function API.AppInstance#getSkeleton
     * @description Shortcut for long schema skeleton of namespace.
     * @return {Object} The skeleton of the application, including namespaces.
     */
    this.getSkeleton = function(){
        return Namespace.generator(namespace, {}, this.getComponents);
    };

};
