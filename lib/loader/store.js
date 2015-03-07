var _loaders = {};

/**
 * @class LoaderStore
 * @memberof API.Loader
 * @description Singleton class that stores the loaders for the bootstraping
 * process.
 */
module.exports = {

    /**
    * @function API.Loader.LoaderStore#registerLoader
    * @description Register components into it, to store into the factory
    * loaders for the bootstraping process.
    * @param {String} name - The name of the loader to be registered.
    * @param {API.Loader.BaseLoader} loader - The object of the loader to be
    * registered.
    */
    registerLoader: function(name, loader){
        _components[name] = loader;
    },

    /**
    * @function API.Loader.LoaderStore#getLoader
    * @description Returns a loader by name.
    * @param {String} name - The name of the loader to be registered.
    * @return {API.Loader.BaseLoader} The requested loader.
    */
    getLoader: function(name){
        if(!_loaders[name]) throw new Error(
            "The requested loader isn't registered. Please register it first"
        );
        else return _loaders[name];
    },

    /**
    * @function API.Loader.LoaderStore#removeLoader
    * @description Removes a loader by name.
    * @param {String} name - The name of the loader to be registered.
    */
    removeLoader: function(type, name){
        delete _loaders[name];
    }

};
