'use strict';

var BaseComponent = require('./base');

/**
 * @class Model
 * @memberof API.Component
 * @inherits API.Component.BaseComponent
 * @description The Model Component for Bool.js, defines a series of methods or
 * schemas that define a data model in MVC architecture.
 */
var Model = module.exports = function(_containedClass){
    Base.call(this, _containedClass);

    this.build = function(drivers){
        return _containedClass.apply(null, drivers);
    };

};

Model.prototype = Object.create(BaseComponent.prototype);
