'use strict';

var store = {};

/**
 * @class Configuration
 * @memberof API
 * @description Store for get and set configurations. Must be frozen before the
 * application starts bootstraping process.
 */
module.exports = {

    /**
     * @function API.Configuration.get
     * @description Retrieves a configuration property from the store.
     * @param {String} name - The key of the configuration in the store.
     * @return {Object} The stored configuration.
     */
    get: function(name){
        return store[name];
    },
    /**
     * @function API.Configuration.set
     * @description Stores a configuration object.
     * @param {String} name - The key of the configuration object to be stored.
     * @param {Object} value - The objecto to be stored.
     */
    set: function(name, value){
        if(typeof value === 'function') throw new Error(
            "Configuration can't store executable code"
        );
        Object.defineProperty(store, name, {
            value: value,
            enumerable: true,
            configurable: false,
            writable: false
        })
    },
    /**
     * @function API.Configuration.freeze
     * @description Freezes the configuration store, avoiding it to be modified
     * through the application lifecycle.
     */
    freeze: function(){
        Object.freeze(store);
    }

};
