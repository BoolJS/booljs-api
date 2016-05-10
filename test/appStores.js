/* global describe, it */ /* jshint -W030 */
'use strict';

var API     = require('..')
,   expect  = require('chai').expect;

describe('App Stores', () => {
    var instance        = API.App.getInstance('com.boolinc.api')
    ,   Configuration   = instance.getComponents().configuration
    ,   Utilities       = instance.getComponents().utilities;

    describe('Non-code stores', () => {

        it('inserts an object into the store', () =>{

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
        });

        it(`fails at inserting a function into the store`, (done) =>{

            var dbFunction = function(){
                return {
                    host: 'db.boolinc.co',
                    port: 3306,
                    database: 'myDatabase'
                };
            };

            try{
                Configuration.set('dbFunction', dbFunction);
                expect(Configuration.get('dbFunction')).to.exist;
                done(new Error(
                    "It's possible to insert a function into the store"
                ));
            } catch(x){
                done();
            }

        });

        it('Fails at rewriting an object into the store', (done) => {

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
                    "It's possible to rewrite a previously " +
                    "stored configuration"
                ));
            } catch(x){
                done();
            }
        });

        it('Freezes the configuration store', () => {
            Configuration.freeze();
        });

        it('Fails inserting objects in a frozen store', (done) => {

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
                    "It's still possible to insert configurations " +
                    "when store is frozen"
                ));
            } catch(x){
                done();
            }
        });

    });

    describe('Code stores', () => {

        it(`allows inserting a function into the store`, () =>{

            var dbFunction = function(){
                return {
                    host: 'db.boolinc.co',
                    port: 3306,
                    database: 'myDatabase'
                };
            };

            Utilities.set('dbFunction', dbFunction);
            expect(Utilities.get('dbFunction')).to.exist;
        });

    });


});
