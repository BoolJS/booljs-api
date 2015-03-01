'use strict';

var BaseComponent   = require('../../component/base')
,   Namespace       = require('./namespace')
,   Components      = require('./components');

/**
 * @class AppInstance
 * @memberof API
 *
 * @description The main point for generating the application class.
 * Is generated from {\link API.App App}.
 */
var AppInstance = module.exports = function(namespace){

    var _components = {}
    ,   componentsMod = Components(_components);

    if(!Namespace.checker(namespace)) throw new Error(
        "Specified namespace is invalid"
    );

    /**
     * @function API.AppInstance#getComponents
     * @description Retrieves the instance of application components
     * @returns {API.Component.BaseComponent[]} The internal components of the
     * application
     */
    this.getComponents = function(){
        return _components;
    };

    /**
     * @function API.AppInstance#getSkeleton
     * @description Shortcut for long schema skeleton of namespace.
     */
    this.getSkeleton = function(){
        return Namespace.generator(namespace, {}, this.getComponents);
    };

};
