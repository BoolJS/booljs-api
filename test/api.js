'use strict';

describe('API', function(){

    it('Listing of namespaces/classes into API must be as specified',
    function(done){

        var apiKeys = Object.keys(API);
        expect(apiKeys).to.eql(['Component', 'Error']);
        done();

    });

    it('BaseComponent is an interface and can\'t be instantiated',
    function(done){

        var baseFunction, baseInstance;

        try {
            baseFunction = API.Component.BaseComponent();
            baseInstance = new API.Component.BaseComponent();
            done(new Error("Lets instantiation pass"));
        } catch(x){
            done();
        }

    });

    it(
        "App is a Singleton, it can't be instantiated as constructor, but " +
        "an instance be gotten by `getInstance()`", function(done){

            var App = API.Component.App;

            var appInstance = App.getInstance()
            ,   appInstance2 = App.getInstance();

            expect(appInstance).to.eql(appInstance2);
            done();

        }
    );

    it(
        "App inherits BaseComponent, must implement its methods and " +
        "properties", function(done){

            var appInstance = API.Component.App.getInstance();

            try{
                appInstance.compatibleComponents();
                done();
            } catch(x){
                done(x);
            }

        }
    );

});
