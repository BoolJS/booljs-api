'use strict';

/**
 * @class Store
 * @memberof API.AppInstance
 * @description Store for multiple purposes, mainly used in configurations and
 * utilities objects. Must be frozen before the application finishes the
 * bootstraping step where object insertion is needed.
 * @param {?Boolean} isExecutable - Determines wheter store can contain some
 * executable code.
 */
module.exports = function (isExecutable) {
    var store = {};

    return {

        /**
         * @function API.AppInstance.Store#get
         * @description Retrieves a property from the store.
         * @param {String} name - The key of the property in the store.
         * @return {Object} The stored property.
         */
        get: function (name) {
            return store[name];
        },
        /**
         * @function API.AppInstance.Store#set
         * @description Stores an object.
         * @param {String} name - The key of the object to be stored.
         * @param {Object} value - The object to be stored.
         */
        set: function (name, value) {
            if (!isExecutable && typeof value === 'function') {
                throw new Error(
                    "Configuration can't store executable code"
                );
            }
            Object.defineProperty(store, name, {
                value: value,
                enumerable: true,
                configurable: false,
                writable: false
            });
            return this;
        },
        /**
         * @function API.AppInstance.Store#freeze
         * @description Freezes the store, avoiding it to be modified through
         * the application lifecycle. Must be called inmediatly after the last
         * related object is inserted into it.
         */
        freeze: function () {
            Object.freeze(store);
            return this;
        },
        /**
         * @function API.AppInstance.Store#getStore
         * @description Retrieves the store instance
         * @return {Object} An instance of the store
         */
        getStore: function () {
            return store;
        }

    };
};
