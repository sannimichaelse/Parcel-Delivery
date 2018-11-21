/* eslint-disable camelcase */
/* eslint-disable no-console */
import parcelService from '../services/parcelService';

/**
 * @exports
 * @class parcelController
 */
class parcelController {
/**
 * Creates a new parcel
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static createParcel(req, res) {
    const userId = req.decoded.user_id;
    parcelService
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
    parcelService
      .viewAll(userId)
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Successfully fetched all user parcels',
        data: response,
      }))
      .catch((err) => {
        if (err.responseMessage === 'Parcels Array Empty') {
          return res.status(200).json({
            status: 200,
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
 * View all parcels
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static viewAllParcels(req, res) {
    parcelService
      .viewAllCreated()
      .then(response => res.status(200).json({
        status: 200,
        statusMessage: 'Successfully fetched all parcels',
        data: response,
      }))
      .catch((err) => {
        if (err.responseMessage === 'Parcels Array Empty') {
          return res.status(200).json({
            status: 200,
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
    parcelService
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
    const { user_id } = req.decoded;
    const { host } = req.headers.host;
    console.log(`${parcelId}${data}${user_id}${host}`);
    parcelService
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
    console.log(`${parcelId}${data}`);
    parcelService
      .updateLocation(parcelId, data)
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
    parcelService
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

export default parcelController;
