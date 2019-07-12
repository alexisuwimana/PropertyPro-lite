const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');

const properties = require('../server/routes/properties');
const app = express();

app.use(express.json());

app.use('/api/properties', properties);

// You need to import your app
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

      it('it should GET single property', (done) => {
        chai.request(app)
            .get('/api/properties/10')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.message.should.equal('The property with the given ID was not found.');                  
                done();
            });
    });

  });

describe('POST /api/properties', () => {
  
       const property =  {
        "owner": "Alexis",
        "status": "available",
        "price": "2500",
        "state": "Uganda",
        "city": "kampala",
        "address": "Nalya",
        "type": "3 bed room"
    };
  it('it should POST a property', (done) => {
      chai.request(app)
          .post('/api/properties')
          .send(property)
          .end((err, res) => {
              console.log(res.body);
              res.should.have.status(201);
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
              done();
          });
  });
});

describe('PUT /api/properties', () => {
    const property={    
        "owner": "John",
        "status": "available",
        "price": "2500",
        "state": "Uganda",
        "city": "kampala",
        "address": "Nalya",
        "type": "3 bed room"
    }
    it('it should PUT a property', (done) => {
        chai.request(app)
            .put('/api/properties/1')
            .send(property)
            .end((err, res) => {
                res.should.have.status(200);           
                done();
            });
    });
  });
  
describe('DELETE /api/properties/:id', () => {
    it('it should DELETE single property', (done) => {
        chai.request(app)
            .delete('/api/properties/2')
            .end((err, res) => {
                res.should.have.status(200);                           
                done();
            });
    });
})


