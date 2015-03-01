'use strict';

describe('API', function(){

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
    
});
