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
        "App inherits BaseComponent, must implement its methods and " +
        "properties", function(done){

            var appInstance = API.Component.App.getInstance("com.boolinc.api");

            try{
                appInstance.compatibleTypes();
                done();
            } catch(x){
                done(x);
            }

        }
    );

    it(
        "App namespace generator must check correctly bad namespaces and " +
        "generate a skeleton for good ones", function(done){

            var App = API.Component.App;

            var badNamespaceApp, secondBadNamespace, thirdBadNamespace;
            var anApp, aSecondApp, aThirdApp;

            try {
                badNamespaceApp = App.getInstance("my.bad-namespace.1app");
                done(new Error("The namespace checker is failing"));
            } catch(x){}

            try {
                secondBadNamespace = App.getInstance("my.bad_namespace.1app");
                done(new Error("The namespace checker is failing"));
            } catch(x){}

            try {
                thirdBadNamespace = App.getInstance("my.:bad_namespace.app2");
                done(new Error("The namespace checker is failing"));
            } catch(x){}

            anApp = App.getInstance("com.boolinc.dogapi");
            expect(anApp.getSkeleton()).to.eql({
                com: {
                    boolinc: {
                        dogapi: {}
                    }
                }
            });

            aSecondApp = App.getInstance("com.bool_inc.dogapi");
            expect(aSecondApp.getSkeleton()).to.eql({
                com: {
                    bool_inc: {
                        dogapi: {}
                    }
                }
            });

            aThirdApp = App.getInstance("com.bool_inc.dog2api");
            expect(aThirdApp.getSkeleton()).to.eql({
                com: {
                    bool_inc: {
                        dog2api: {}
                    }
                }
            });

            done();

        }
    );

    it("Applications created can be listed", function(done){

        expect(API.Component.App.listInstances()).to.eql([
            "com.boolinc.api",
            "com.boolinc.dogapi",
            "com.bool_inc.dogapi",
            "com.bool_inc.dog2api"
        ]);

        done();

    });

    it("Applications created in pool can be removed", function(done){

        var App = API.Component.App;

        App.removeInstance("com.boolinc.dogapi");
        App.removeInstance("com.bool_inc.dogapi");
        App.removeInstance("com.bool_inc.dog2api");

        done();

    });

});
