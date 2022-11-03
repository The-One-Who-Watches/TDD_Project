var expect = require('chai').expect;

before('root setup code', function(){
    console.log('setup code');
});
after('root teardown code', function(){
    console.log('root teardown code');
});
beforeEach('root setup for each test', function(){
    console.log('root setup for each test');
});
afterEach('root teardown for each test', function(){
    console.log('root teardown for each test');
})

describe('test_suite2', function(){

    it('test3', function(){
        console.log('test3');
        expect(true).to.equal(true);
    })
    it('test4', function(){
        console.log('test4');
        expect(true).to.equal(true);
    })
});