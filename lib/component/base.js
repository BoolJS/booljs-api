'use strict';

/**
 * @class BaseComponent
 * @memberof API.Component
 * @description Base Class for defining Bool.js components. It cannot be
 * instantiated
 */
var BaseComponent = module.exports = function(_containedClass, _appContainer){

    return function(){
        return _containedClass(_appContainer);
    };

};
