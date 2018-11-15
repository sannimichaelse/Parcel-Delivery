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
    parcelService
      .saveParcel(req.body, req.decoded.data)
      .then(() => res.status(201).json({
        statusMessage: 'New parcel created successfully',
      }))
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          statusMessage: 'Could not create parcel',
        });
      });
  }
  /**
 * Creates a new parcel
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static viewAllParcels(req, res) {
    parcelService
      .viewAll(req.decoded.data)
      .then(response => res.status(201).json({
        status: 201,
        statusMessage: 'Successfully fetched all user parcels',
        data: response,
      }))
      .catch((err) => {
        console.log(err);
        if (err.responseMessage === 'Parcels Array Empty') {
          return res.status(200).json({
            status: 200,
            statusMessage: 'No parcel created by user yet',
            data: [],
          });
        }
        return res.status(400).json({
          status: 400,
          statusMessage: 'Could not fetch all parcel',
        });
      });
  }
}

export default parcelController;
