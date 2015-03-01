/**
 * Globals module
 */
module.exports = {
    PATH: process.cwd(),

    q: require('q'),
    _: require('underscore'),
    injector: require('object-injector'),

    Interface: require('./interface'),

    util: require('util'),
    log: require('../utils/log')

};
