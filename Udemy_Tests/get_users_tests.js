var expect = require('chai').expect;
var chai = require("chai");
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('request');
chai.should();
chai.use(sinonChai);

var getUsers = require('../Udemy_Tests/get_users.js')
describe('GetUsers Tests', function(){
    var spy;
    beforeEach(function(){
        spy = sinon.spy
        sinon.stub(request, 'get').callsFake(function (url, callback) {
            callback({}, {body:'{"users":["user1", "user2"]'})
        })
    })
    afterEach(function (){
        sinon.restore();
    });
    it('calls the callback', function(){
        getUsers(spy)
        spy.should.have.been.calledOnce;
    })

    it('calls the current URL', function (){


        getUsers(spy);
        request.get.should.have.been.calledWith("https://www.mysite.com/api/users")
    })
    it('returns correct data', function(){
        getUsers(spy);
        spy.should.have.been.calledWith({users:['user1', 'user2']})
    })
})
