'use strict';

let instance = null;

function filter (object, criteria) {
    const result = [];

    for (const property in object) {
        if (criteria(object[property])) {
            result.push(object[property]);
        }
    }

    return result;
}

/**
* @class PluginStore
* @description Store plugins
*/
module.exports = class PluginStore {
    constructor () {
        this._store = {};
    }

    /**
     * @function PluginStore.getInstance
     * @description Retrieves a copy of the running plugin store instance.
     * @return {PluginStore} A running instance
     */
    static getInstance () {
        if (instance === null) {
            instance = new PluginStore();
        }
        return instance;
    }

    /**
    * @function PluginStore#get
    * @description Retrieves a plugin identified by its name
    * @param  {String} name - The name of the plugin to retrieve
    * @return {BasePlugin} A plugin
    */
    get (name) {
        return this._store[name];
    }

    /**
    * @function PluginStore#list
    * @description Retrieves a list of plugins filtered by type
    * @param  {String} type - The type of plugins to retrieve
    * @return {BasePlugin[]} An array containing plugins of specified type
    */
    list (type) {
        return filter(this._store,
            plugin => Object.getPrototypeOf(plugin.constructor) === type
        );
    }

    /**
    * @function PluginStore#register
    * @description Registers a plugin.
    * @param {BasePlugin} plugin - A plugin to be registered in store
    */
    register (plugin, name) {
        if (!this._store[name]) {
            this._store[name] = plugin;
        }
        return instance;
    }
};
