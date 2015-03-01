'use strict';

describe('API', function(){

    it('Listing of namespaces/classes into API must be as specified',
    function(done){

        var apiKeys = Object.keys(API);
        expect(apiKeys).to.eql([
            'App',
            'Component',
            'Error',
            'Loader'
        ]);
        done();

    });

});
