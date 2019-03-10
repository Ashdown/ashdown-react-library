var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../app');
var should = chai.should();

chai.use(chaiHttp);

describe('App', function() {
    it('should display the homepage', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });

});