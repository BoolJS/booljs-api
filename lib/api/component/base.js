'use strict';

/**
 * @interface BaseComponent
 * @memberof API.Component
 * @description Base Class for defining Bool.js components. It cannot be
 * instantiated
 */
module.exports = Interface(
    "BaseComponent",
    [
        /**
         * @function API.Component.BaseComponent#compatibleLoaderTypes
         * @description Controls which component types are compatible to the
         * implemented component and can be binded to (backwards and forwards),
         * for security and isolation issues.
         * @returns {API.Loader.BaseLoader[]} The list of compatible loader
         * types.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "compatibleLoaderTypes",
        /**
         * @function API.Component.BaseComponent#registerLoader
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
         * @function API.Component.BaseComponent#listLoaders
         * @description List the previously registered loaders.
         * @return {API.Loader.BaseLoader[]} The list of loaders stored into
         * this component.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "listLoaders",
        /**
         * @function API.Component.BaseComponent#removeLoader
         * @description Removes a loader from the store of the component.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "removeLoader"
    ]
);
