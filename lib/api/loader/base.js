'use strict';

/**
 * @interface BaseLoader
 * @memberof API.Loader
 * @description Base Class for defining Bool.js loaders. It cannot be
 * instantiated
 */
module.exports = Interface(
    "BaseLoader",
    [
        /**
         * @function API.Loader.BaseLoader#createInstance
         * @description Creates an instance of a component using the specific
         * loader configurations.
         * @returns {API.Component.BaseComponent} The newly instantiated
         * component.
         * @throws {Error} If it's a non-implemented function, it'll throw an
         * Error.
         */
        "createInstance"
    ]
);
