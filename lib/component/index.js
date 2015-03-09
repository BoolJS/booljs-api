'use strict';

/**
 * @namespace Component
 * @memberof API
 * @description This namespace enables creating a hierarchy of components that
 * can be identified and have similar functions, but behave differently in
 * terms of security.
 */
module.exports = {
    BaseComponent: require('./base'),
    Model: require('./model'),
    Dao: require('./dao')
};
