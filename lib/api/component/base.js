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
         * @function API.Component.BaseComponent#compatibleComponents
         * @description Controls which components are compatible to the implemented
         * component and can be binded to (backwards and forwards), for security
         * and isolation issues.
         * @returns {Component[]} The list of compatible components.
         * @throws {Error} This is a non-implemented function, so it'll throw an
         * Exception
         */
        "compatibleComponents"
    ]
);
