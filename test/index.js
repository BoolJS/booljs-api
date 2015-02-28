'use strict';

/**
 * Configures expectjs
 */
global.expect = require('expect.js');

/**
 * Loads Core API
 */
require('..');

/**
 * Loads tests
 */
require('./api');
