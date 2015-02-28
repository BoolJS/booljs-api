'use strict';

var BaseComponent = require('../base');

/**
 * @member App
 * @memberof API.Component
 * @implements API.Component.BaseComponent
 * @description The main point for generating the application class. Defined
 * itself as a Singleton
 */
module.exports = (function(){

    var instance = {};

    function App(namespace){

        this.compatibleComponents = function(){
            return [];
        };

        // Apply Implements
        Interface.ensureImplements(this, BaseComponent);
    }

    return {
        /**
         * @function API.Component.App.getInstance
         * @description Gets instance of an application from the pool.
         * @param {String} namespace - The namespace of the application.
         * @return {App} The application object.
         */
        getInstance: function(namespace){
            if(instance[namespace] === undefined){
                instance[namespace] = new App(namespace);
            }
            return instance[namespace];
        },
        /**
         * @function API.Component.App.removeInstance
         * @description Removes instance of an application from the pool.
         * @param {String} namespace - The namespace of the application.
         */
        removeInstance: function(namespace){
            delete instance[namespace];
        }
    };

})();
