'use strict';

/** @ignore */
module.exports = function (store) {
    /**
     * @function Plugins.register
     * @memberof API
     * @description Registers a plugin.
     * @param  {Plugin} plugin - A plugin to be registered in store
     */
    return function (plugin) {
        var Plugin = require(plugin);
        var _plugin = new Plugin();
        store.push(_plugin);
    };
};
