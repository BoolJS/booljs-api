describe('API', function(){

    it('Only have an error in API', function(done){

        var apiKeys = Object.keys(API);
        expect(apiKeys).to.eql(['Error']);
        done();

    });

});
