import chai from 'chai';
import dataStore from '../../utilities/dummyData/index';
import helperClass from '../../utilities/dummyHelper';

const { assert } = chai;

describe('UNIT TESTS HELPERS', () => {
  describe('Find Parcel by User', () => {
    it('should return 0', (done) => {
      const result = helperClass.findParcelByUser(dataStore, 'mk1', '2222');
      assert.equal(result, '0', 'Parcel found');
      done();
    });

    it('should return -1 ', (done) => {
      const result = helperClass.findParcelByUser(dataStore, '1', '22');
      assert.equal(result, '-1', 'Parcel not found');
      done();
    });
  });

  describe('Find user by parcel id', () => {
    it('should return 1', (done) => {
      const result = helperClass.findUserByParcelId(dataStore, '3333');
      assert.equal(result, '1', 'Parcel found');
      done();
    });

    it('should return -1 ', (done) => {
      const result = helperClass.findUserByParcelId(dataStore, '22');
      assert.equal(result, '-1', 'Parcel not found');
      done();
    });
  });

  describe('Find all parcels created by user', () => {
    it('should return dandave', (done) => {
      const result = helperClass.findAllParcelByUserId(dataStore, '2');
      assert.equal(result[0].username, 'dandave');
      assert.equal(result[0].parcelStatus, 'Canceled');
      assert.equal(result[0].parcelId, '3333');
      done();
    });

    it('should return empty array ', (done) => {
      const result = helperClass.findAllParcelByUserId(dataStore, '0');
      assert.deepEqual(result, []);
      done();
    });
  });
});
