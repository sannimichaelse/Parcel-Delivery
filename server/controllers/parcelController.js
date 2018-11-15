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
}

export default parcelController;
