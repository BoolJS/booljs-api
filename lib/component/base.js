'use strict';

/**
* @class BaseComponent
* @memberof API.Component
* @description Base Class for defining Bool.js components. It cannot be
* instantiated
*/
var BaseComponent = module.exports = function(appContainer, containedClass){

    function ComponentLoader(){
        return containedClass(appContainer);
    }

    this.inject = function(){
        
    };


};
