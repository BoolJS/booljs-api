'use strict';

/**
 * Configures expectjs
 */
global.expect = require('expect.js');

/**
 * Loads tests
 */
require('./api');
require('./app');
require('./appInstance');
require('./appStores');
require('./component');
