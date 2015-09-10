/* global describe, before, it */
'use strict';

var API = require('..')
,   expect = require('expect.js');

describe('Plugins', function(){

    it('creates a middleware and registers it', function(done){
        API.register(new API.Plugins.Middleware());

        done();
    });

    it('Fails integrity check for a new Middleware plugin', function(done){
        try {
            var middleware = new API.Plugins.Middleware();
            middleware.checkIntegrity();
        } catch(err){
            done();
        }

        done('Passed without error');
    });

    it('Can\'t rewrite a configuration object into the store', function(done){

        try{
            Configuration.set('db', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            expect(Configuration.get('db')).to.eql({
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            done(new Error(
                "It's possible to rewrite a previously stored configuration"
            ));
        } catch(x){
            done();
        }

    });

    it("Can freeze the configuration store", function(done){
        Configuration.freeze();
        done();
    });

    it("Can't insert a new object after store has been frozen", function(done){

        try{
            Configuration.set('newdb', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            expect(Configuration.get('newdb')).to.eql({
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            done(new Error(
                "It's still possible to insert configurations after store " +
                "been frozen"
            ));
        } catch(x){
            done();
        }

    });

});
