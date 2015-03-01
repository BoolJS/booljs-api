'use strict';

describe('Configuration', function(){

    it('Can insert a configuration object into the store', function(done){

        API.Configuration.set('db', {
            host: 'db.boolinc.co',
            port: 3306,
            database: 'myDatabase'
        });

        expect(API.Configuration.get('db')).to.eql({
            host: 'db.boolinc.co',
            port: 3306,
            database: 'myDatabase'
        });

        done();

    });

    it('Can\'t insert a function into the store', function(done){

        var dbFunction = function(){
            return {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            };
        };

        try{
            API.Configuration.set('dbFunction', dbFunction);
            expect(API.Configuration.get('dbFunction')).to.eql(dbFunction);
            done(new Error(
                "It's possible to insert a function into the store"
            ));
        } catch(x){
            done();
        }

    });

    it('Can\'t rewrite a configuration object into the store', function(done){

        try{
            API.Configuration.set('db', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            expect(API.Configuration.get('db')).to.eql({
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
        API.Configuration.freeze();
        done();
    });

    it("Can't insert a new object after store has been frozen", function(done){

        try{
            API.Configuration.set('newdb', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            expect(API.Configuration.get('newdb')).to.eql({
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
