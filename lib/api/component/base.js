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
         * @description Controls which component types are compatible to the
         * implemented component and can be binded to (backwards and forwards),
         * for security and isolation issues.
         * @returns {API.Component.BaseComponent[]} The list of compatible
         * component types.
         * @throws {Error} This is a non-implemented function, so it'll throw
         * an Error.
         */
        "compatibleTypes",
        /**
         * @function API.Component.BaseComponent#registerComponent
         * @description Register components into it, to enable in bootstraping
         * process.
         * @throws {Error} In case registered component is not compatible.
         */
        "registerComponent",
        /**
         * @function API.Component.BaseComponent#listComponents
         * @description List the previously registered components.
         * @return {API.Component.BaseComponent[]} The list of components that
         * are registered into this component.
         */
        "listComponents",
        /**
         * @function API.Component.BaseComponent#removeComponent
         * @description Removes component from list of registered components.
         */
        "removeComponent"
    ]
);
