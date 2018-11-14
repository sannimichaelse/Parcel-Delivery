import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.use(chaiHttp);
chai.should();

describe('UNIT TESTS FOR DUMMY DATA CONTROLLERS', () => {
  /*
   * Test the /GET route
   */
  describe('/GET REQUEST', () => {
    it('it should GET all parcels', (done) => {
      chai
        .request(server)
        .get('/api/v1/parcels')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('statusMessage')
            .to.equals('Successfully fetched all parcels');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('array');
          done();
        });
    });

    it('it should GET parcel by parcelid specified', (done) => {
      chai
        .request(server)
        .get('/api/v1/parcels/2222')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('statusMessage')
            .to.equals('Parcel found');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });

    it('it should not GET parcel id is not found', (done) => {
      const parcelid = 7;
      chai
        .request(server)
        .get(`/api/v1/parcels/${parcelid}`)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            statusMessage: 'Parcel not found',
          });
          done();
        });
    });

    it('it should GET all parcels created by a user', (done) => {
      const userid = 3;
      chai
        .request(server)
        .get(`/api/v1/users/${userid}/parcels`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('statusMessage')
            .to.equals('Parcel found');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('array');
          done();
        });
    });

    it('it should fail while trying to get all parcels for an unathorized user', (done) => {
      const userid = 4;
      chai
        .request(server)
        .get(`/api/v1/users/${userid}/parcels`)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have
            .property('statusMessage')
            .to.equals('Parcel with userID not found');
          res.body.should.have.property('status').to.equals(400);

          done();
        });
    });
  });

  /*
* Test the /POST route
*/
  describe('/POST REQUEST', () => {
    it('it should make a post request if all fields are not empty ', (done) => {
      chai
        .request(server)
        .post('/api/v1/parcels/')
        .send({
          uuid: 'mk9',
          username: 'sullivan',
          userId: '5',
          parcelId: '443215',
          parcelWeight: '122kg',
          parcelName: 'Tecno Camon C9',
          parcelDestination: 'Onitsha',
          parcelLocation: 'Lagos',
          parcelStatus: 'progress',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.deep.equal({
            status: 201,
            statusMessage: 'New parcel created successfully',
          });
          done();
        });
    });

    it('it should not make a post request if some fields are empty ', (done) => {
      const body = {
        uuid: '',
        username: 'sullivan',
        userId: '5',
        parcelId: '443215',
        parcelWeight: '122kg',
        parcelName: 'Tecno Camon C9',
        parcelDestination: 'Onitsha',
        parcelLocation: 'Lagos',
        parcelStatus: 'progress',
      };

      chai
        .request(server)
        .post('/api/v1/parcels/')
        .send(body)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            statusMessage: "\"uuid\" is not allowed to be empty",
          });
          done();
        });
    });

    it('it should not make a post request if a field is not included', (done) => {
      const body = {
        username: 'sullivan',
        userId: '5',
        parcelId: '443215',
        parcelWeight: '122kg',
        parcelName: 'Tecno Camon C9',
        parcelDestination: 'Onitsha',
        parcelLocation: 'Lagos',
        parcelStatus: 'progress',
      };
      chai
        .request(server)
        .post('/api/v1/parcels/')
        .send(body)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            statusMessage: "\"uuid\" is required",
          });
          done();
        });
    });

    it('it should throw an error when you try to add duplicate data ', (done) => {
      const data = {
        uuid: 'mk9',
        username: 'sullivan',
        userId: '5',
        parcelId: '443215',
        parcelWeight: '122kg',
        parcelName: 'Tecno Camon C9',
        parcelDestination: 'Onitsha',
        parcelLocation: 'Lagos',
        parcelStatus: 'progress',
      };

      chai
        .request(server)
        .post('/api/v1/parcels/')
        .send(data)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.deep.equal({
            status: 400,
            statusMessage:
              'Parcel Already Exists. Make sure uuid and parcelId are unique'
          });
          done();
        });
    });
  });

  /*
* Test the /UPDATE route
*/
  describe('/CANCEL REQUEST', () => {
    it('it should cancel request by parcel id', (done) => {
      const parcelid = 2222;
      chai
        .request(server)
        .put(`/api/v1/parcels/${parcelid}/cancel`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property('statusMessage')
            .to.equals('Parcel Order Canceled');
          res.body.should.have.property('status').to.equals(200);
          res.body.should.have.property('data').to.be.an('object');
          done();
        });
    });
  });
});
