'use strict';

var BaseComponent = require('./base');

/**
 * @Class App
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
        getInstance: function(namespace){
            if(instance[namespace] === undefined){
                instance[namespace] = new App(namespace);
            }
            return instance[namespace];
        },
        removeInstance: function(namespace){
            delete instance[namespace];
        }
    };

})();
