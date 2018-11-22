import helperClass from '../utilities/dummyHelper';
import dataStore from '../utilities/dummyData/index';
/**
 * @exports
 * @class DummyController
 */
class DummyController {
  /**
   * Creates a new parcel
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static createNewParcel(req, res) {
    const { uuid, parcelId } = req.body;
    const position = helperClass.findParcelByUser(dataStore, uuid, parcelId);
    if (position > -1) {
      return res.status(400).json({
        status: 400,
        message:
          'Parcel Already Exists. Make sure uuid and parcelId are unique',
      });
    }
    dataStore.push(req.body);
    return res.status(201).json({
      status: 201,
      message: 'New parcel created successfully',
    });
  }
  /**
   * Find a parcel by id
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static findParcelById(req, res) {
    const { parcelId } = req.params;
    const position = helperClass.findUserByParcelId(dataStore, parcelId);
    if (position > -1) {
      return res.status(200).json({
        status: 200,
        message: 'Parcel found',
        data: dataStore[position],
      });
    }

    return res.status(400).json({
      status: 400,
      message: 'Parcel not found',
    });
  }
  /**
   * Get all parcels
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getAllParcels(req, res) {
    return res.status(200).json({
      status: 200,
      message: 'Successfully fetched all parcels',
      data: dataStore,
    });
  }

  /**
   * Get all parcels
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getParcelByUserId(req, res) {
    const { userId } = req.params;

    const result = helperClass.findAllParcelByUserId(dataStore, userId);

    if (result === undefined || result.length === 0) {
      return res.status(400).json({
        status: 400,
        message: 'Parcel with userID not found',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Parcel found',
      data: result,
    });
  }
  /**
   * Cancel parcel by parcel id
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static cancelByParcelId(req, res) {
    const { parcelId } = req.params;

    const position = helperClass.findUserByParcelId(dataStore, parcelId);
    if (position > -1) {
      dataStore[position].parcelStatus = 'Canceled';
      return res.status(200).json({
        status: 200,
        message: 'Parcel Order Canceled',
        data: dataStore[position],
      });
    }
    return res.status(400).json({
      status: 400,
      message: 'parcel with this id is not found',
    });
  }
}

export default DummyController;
