/* global describe, before, it */
'use strict';

var API = require('..')
,   expect = require('expect.js');

describe('Plugins', function(){

    it('creates a middleware and registers it', function(){
        new API.Middleware('middleware1');
    });

    it('Fails integrity check for a new Middleware plugin', function(done){
        try {
            var middleware = new API.Middleware('middeware2');
            middleware.checkIntegrity();
            done(new Error('Passed without error'));
        } catch(err){
            done();
        }
    });

    it('Gets a list of middleware plugins', function(){
        var store = API.Plugins.getInstance();
        expect(store.list(API.Middleware)).to.have.length(3);
    });

    it('Look for an specific middleware', function () {
        var store = API.Plugins.getInstance();
        expect(store.get('middleware1', API.Middleware)).to.be.ok();
    });

});
