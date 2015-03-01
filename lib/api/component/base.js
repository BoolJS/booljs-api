'use strict';

/**
 * @class BaseComponent
 * @memberof API.Component
 * @description Base Class for defining Bool.js components. It cannot be
 * instantiated
 */
var BaseComponent = module.exports = function(){
    

};

var ComponentInterface = new Interface("BaseComponent",
    [

        /**
         * @function API.Component.BaseComponent.registerLoader
         * @description Register components into it, to store into the factory
         * loaders for the bootstraping process.
         * @param {String} name - The name of the loader to be registered.
         * @param {Function} type - The type of the loader.
         * @throws {Error} In case loader type is not compatible with actual
         * component.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "registerLoader",
        /**
         * @function API.Component.BaseComponent.listLoaders
         * @description List the previously registered loaders.
         * @return {API.Loader.BaseLoader[]} The list of loaders stored into
         * this component.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "listLoaders",
        /**
         * @function API.Component.BaseComponent.removeLoader
         * @description Removes a loader from the store of the component.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "removeLoader"

    ]
);
