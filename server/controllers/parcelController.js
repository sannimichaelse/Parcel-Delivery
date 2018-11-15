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
    const userId = req.decoded.data;
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
  static viewAllParcels(req, res) {
    const userId = req.decoded.data;
    parcelService
      .viewAll(userId)
      .then(response => res.status(201).json({
        status: 201,
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
}

export default parcelController;
