/* eslint-disable camelcase */
/* eslint-disable no-console */
import ParcelService from '../utilities/services/ParcelService';

/**
 * @exports
 * @class ParcelController
 */
class ParcelController {
/**
 * Creates a new parcel
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static createParcel(req, res) {
    const userId = req.decoded.user_id;
    ParcelService
      .saveParcel(req.body, userId)
      .then(() => res.status(201).json({
        statusMessage: 'New parcel created successfully',
      }))
      .catch(err => res.status(400).json({
        statusMessage: 'Could not create parcel',
      }));
  }
  /**
 * View all parcels created by user
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static viewUserParcels(req, res) {
    const userId = req.decoded.user_id;
    ParcelService
      .viewAll(userId)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Successfully fetched all user parcels',
        data: response,
      }))
      .catch((err) => {
        if (err.responseMessage === 'Parcels Array Empty') {
          return res.status(400).json({
            status: 400,
            statusMessage: 'No parcel created by user yet',
            data: [],
          });
        }
        return res.status(400).json({
          status: 400,
          statusMessage: 'Could not fetch all parcels',
        });
      });
  }
  /**
 * View all parcels created by user
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static findByParcelId(req, res) {
    const userId = req.decoded.user_id;
    const { id } = req.params;
    ParcelService
      .findByParcelId(userId, id)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Successfully fetched parcel',
        data: response,
      }))
      .catch((err) => {
        console.log(err);
        if (err.responseMessage === 'Parcel does not exist') {
          return res.status(404).json({
            status: 404,
            statusMessage: 'Parcel with id does not Exist for User',
          });
        }
        return res.status(400).json({
          status: 400,
          statusMessage: 'Could not fetch parcel',
        });
      });
  }
  /**
 * admin find parcel by id
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static adminFindByParcelId(req, res) {
    const { id } = req.params;
    ParcelService
      .adminFindByParcelId(id)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Successfully fetched parcel',
        data: response,
      }))
      .catch((err) => {
        console.log(err);
        if (err === 'Parcel does not exist') {
          return res.status(404).json({
            status: 404,
            statusMessage: 'Parcel with id does not Exist',
          });
        }
        return res.status(400).json({
          status: 400,
          statusMessage: 'Could not fetch parcel',
        });
      });
  }
  /**
 * View all parcels
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static viewAllParcels(req, res) {
    ParcelService
      .viewAllCreated()
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Successfully fetched all parcels',
        data: response,
      }))
      .catch((err) => {
        if (err.responseMessage === 'Parcels Array Empty') {
          return res.status(404).json({
            status: 404,
            statusMessage: 'Empty Parcel Array',
            data: [],
          });
        }
        return res.status(400).json({
          status: 400,
          statusMessage: 'Could not fetch all parcels',
        });
      });
  }
  /**
 * Update parcel Destination
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static updateParcelDestination(req, res) {
    const parcelId = req.params.id;
    const data = req.body;
    console.log(`${parcelId}${data}`);
    ParcelService
      .updateDestination(parcelId, data)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Parcel Destination Updated Successfully',
        data: response,
      }))
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err,
      }));
  }
  /**
 * Update parcel Destination
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static updateParcelStatus(req, res) {
    const parcelId = req.params.id;
    const data = req.body;
    const { host } = req.headers;
    ParcelService
      .updateStatus(parcelId, data, host)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Parcel Status Updated Successfully',
        data: response,
      }))
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err,
      }));
  }
  /**
 * Update parcel Location
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static updateParcelLocation(req, res) {
    const parcelId = req.params.id;
    const data = req.body;
    const { host } = req.headers;
    ParcelService
      .updateLocation(parcelId, data, host)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Parcel Location Updated Successfully',
        data: response,
      }))
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err,
      }));
  }
  /**
 * cancel parcel status
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static cancelParcel(req, res) {
    const parcelId = req.params.id;
    ParcelService
      .cancelParcel(parcelId)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Parcel Status Updated Successfully',
        data: response,
      }))
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err,
      }));
  }
}

export default ParcelController;
