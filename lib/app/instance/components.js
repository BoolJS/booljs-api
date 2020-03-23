'use strict';

/**
 * @class AppComponents
 * @memberof API.Instance
 * @description Creates a store for holding up Application components, in case
 * is needed by application.
 */
module.exports = function () {
    var _components = {};

    return {

        /**
         * @function API.AppInstance#insertComponent
         * @description Inserts a component into the AppInstance namespace
         * scheme.
         * @param {String} name - The name of the component to be inserted.
         * @param {API.Component.BaseComponent} component - The component to be
         * inserted.
         * @param {Object} [position] - The position where is being inserted,
         * otherwise will appear at the root of components skeleton.
         */
        insertComponent: function (name, component, position) {
            Object.defineProperty(position || _components, name, {
                value: component,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },

        /**
         * @function API.AppInstance#getComponents
         * @description Retrieves the instance of application components
         * @returns {API.Component.BaseComponent[]} The internal components of the
         * application
         */
        getComponents: function () {
            return _components;
        },

        /**
         * @function API.AppInstance#removeComponent
         * @description Removes a previous inserted component.
         * @param {String} name - The name of the component to be removed.
         * @param {Object} [position] - The position where is being removed,
         * otherwise will look into the root of components skeleton.
         */
        removeComponent: function (name, position) {
            delete (position || _components)[name];
        }

    };
};
