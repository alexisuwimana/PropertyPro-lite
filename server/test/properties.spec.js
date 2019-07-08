// During the rest the en variable is set to test
/* global describe it beforeEach */
//process.env.NODE_ENV = 'test';

const Property = require('../routes/properties');

// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

// You need to import your app
const app = require('../Index');

const should = chai.should();
// Set up the chai Http assertion library
chai.use(chaiHttp);
    
    
    //Test the GET /api/properties     
    describe('GET /api/properties', () => {
        it('it should GET all properties', (done) => {
            chai.request(app)
                .get('/api/properties')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                   // res.owner.should.be.a('string');
                    done();
                });
        });
    });

    describe('GET /api/properties/:id', () => {
      it('it should GET single property', (done) => {
          chai.request(app)
              .get('/api/properties')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.an('array');                  
                  done();
              });
      });
  });

    // More test...
// });

describe('POST /api/properties', () => {
  
       const property =  { 
          owner: "579",
          status: "available",
          price: "2000",
          state: "Rwanda",
          city: "kigali",
          address: "kicukiro",
          type: "3 bed room"
        };
  it('it should POST a property', (done) => {
      chai.request(app)
          .post('/api/properties')
          .end((err, res) => {
              res.should.have.status(400);
              done();
          });
  });
});


describe('PUT /api/properties', () => {
  it('it should PUT a property', (done) => {
      chai.request(app)
          .put('/api/properties/:id')
          .end((err, res) => {
              res.should.have.status(404);
              //res.body.should.be.an('array');              
              done();
          });
  });
});