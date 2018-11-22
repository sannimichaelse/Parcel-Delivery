/* eslint-disable no-console */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.use(chaiHttp);
chai.should();

let userToken = '';
let adminToken = '';

before(() => {
  it('it should login user', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'tomiwatech@yahoo.com',
        password: '123456',
      })
      .end((err, res) => {
        res.body.should.have
          .property('message')
          .to.equals('Authentication Successful');
        // eslint-disable-next-line prefer-destructuring
        userToken = res.body.token;
        res.body.should.have.property('status').to.equals(200);
        res.body.should.have.property('data').to.be.an('object');
        res.body.should.have.property('token').to.be.a('string');
        done();
      });
  });
  it('it should login admin', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'sann@gmail.com',
        password: '123456',
      })
      .end((err, res) => {
        res.body.should.have
          .property('message')
          .to.equals('Authentication Successful');
        // eslint-disable-next-line prefer-destructuring
        adminToken = res.body.token;
        res.body.should.have.property('status').to.equals(200);
        res.body.should.have.property('data').to.be.an('object');
        res.body.should.have.property('token').to.be.a('string');
        done();
      });
  });
});

describe('UNIT TESTS FOR PARCEL CONTROLLER', () => {
  describe('/POST REQUEST', () => {
    it('it should create parcel ', (done) => {
      chai
        .request(server)
        .post('/api/v1/parcels')
        .set('x-access-token', userToken)
        .send({
          parcel: 'Samsung',
          weight: '3432',
          weightMetric: 'kg',
          status: 'progress',
          location: 'yaba',
          destination: 'ajah',
        })
        .end((err, res) => {
          res.body.should.have
            .property('message')
            .to.equals('New parcel created successfully');
          res.body.should.have.property('status').to.equals(201);
          done();
        });
    });
    it('it should not make a post request if some fields are empty ', (done) => {
      const body = {
        parcel: '',
        weight: '3432',
        weightMetric: 'kg',
        status: 'progress',
        location: 'yaba',
        destination: 'ajah',
      };

      chai
        .request(server)
        .post('/api/v1/parcels')
        .set('x-access-token', userToken)
        .send(body)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            message: 'parcel is not allowed to be empty',
          });
          done();
        });
    });
    it('it should not make a post request if a field is not added ', (done) => {
      const body = {
        weight: '3432',
        weightMetric: 'kg',
        status: 'progress',
        location: 'yaba',
        destination: 'ajah',
      };

      chai
        .request(server)
        .post('/api/v1/parcels')
        .set('x-access-token', userToken)
        .send(body)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            message: 'parcel is required',
          });
          done();
        });
    });
  });
  describe('/GET REQUEST', () => {
    it('it should cancel parcel status ', (done) => {
      chai
        .request(server)
        .get('/api/v1/parcels/15/cancel')
        .set('x-access-token', userToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('message')
            .to.equals('Parcel Status Updated Successfully');
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
    it('it should get all parcels created by user', (done) => {
      chai
        .request(server)
        .get('/api/v1/users/parcels')
        .set('x-access-token', userToken)
        .end((err, res) => {
          res.body.should.have
            .property('message')
            .to.equals('Successfully fetched all user parcels');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
    it('it should get user parcel by ID', (done) => {
      chai
        .request(server)
        .get('/api/v1/users/parcels/12')
        .set('x-access-token', userToken)
        .end((err, res) => {
          res.body.should.have
            .property('message')
            .to.equals('Successfully fetched parcel');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
    it('it should get all parcels created on the platform - Admin Only', (done) => {
      chai
        .request(server)
        .get('/api/v1/parcels/')
        .set('x-access-token', adminToken)
        .end((err, res) => {
          res.body.should.have
            .property('message')
            .to.equals('Successfully fetched all parcels');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
    it('it should get any parcel by parcel id - Admin Only', (done) => {
      chai
        .request(server)
        .get('/api/v1/parcels/8')
        .set('x-access-token', adminToken)
        .end((err, res) => {
          res.body.should.have
            .property('message')
            .to.equals('Successfully fetched parcel');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
  });
  describe('/PUT REQUEST', () => {
    it('it should change parcel destination ', (done) => {
      chai
        .request(server)
        .put('/api/v1/parcels/15/destination')
        .set('x-access-token', userToken)
        .send({ destination: 'OWORONSOKI' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('message')
            .to.equals('Parcel Destination Updated Successfully');
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
    it('it should change parcel status - Admin Only', (done) => {
      chai
        .request(server)
        .put('/api/v1/parcels/15/status')
        .set('x-access-token', adminToken)
        .send({ status: 'progress' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('message')
            .to.equals('Parcel Status Updated Successfully');
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
    it('it should change parcel present location - Admin Only', (done) => {
      chai
        .request(server)
        .put('/api/v1/parcels/15/location')
        .set('x-access-token', adminToken)
        .send({ location: 'YABATECH' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('message')
            .to.equals('Parcel Location Updated Successfully');
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
  });
});
