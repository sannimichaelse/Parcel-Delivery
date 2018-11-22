/* eslint-disable no-console */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import queryProivider from '../../utilities/queries';

chai.use(chaiHttp);
chai.should();

let token = '';

beforeEach(() => {
  const parcel = 'Samsung';
  return queryProivider.deleteParcelByNameQuery(parcel).then((res) => {
    console.log(res);
  }).catch(() => {});
});

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
        token = res.body.token;
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
        .set('x-access-token', token)
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
    it('it should get all parcels created by user', (done) => {
      chai
        .request(server)
        .get('/api/v1/users/parcels')
        .set('x-access-token', token)
        .end((err, res) => {
          res.body.should.have
            .property('message')
            .to.equals('Successfully fetched all user parcels');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
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
        .set('x-access-token', token)
        .send(body)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            statusMessage: 'parcel is not allowed to be empty',
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
        .set('x-access-token', token)
        .send(body)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            statusMessage: 'parcel is required',
          });
          done();
        });
    });

    it('it should cancel parcel status ', (done) => {
      chai
        .request(server)
        .get('/api/v1/parcels/15/cancel')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('message')
            .to.equals('Parcel Status Updated Successfully');
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
  });
});
