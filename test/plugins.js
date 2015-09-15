/* global describe, before, it */
'use strict';

var API = require('..')
,   expect = require('expect.js');

describe('Plugins', function(){

    it('creates a middleware and registers it', function(done){
        API.Plugins.register(new API.Middleware());
        done();
    });

    it('Fails integrity check for a new Middleware plugin', function(done){
        try {
            var middleware = new API.Middleware();
            middleware.checkIntegrity();
            done(new Error('Passed without error'));
        } catch(err){
            done();
        }
    });

    it('Gets a list of middleware plugins', function(done){
        expect(API.Plugins.list('middleware')).to.have.length(1);
        done();
    });

});
