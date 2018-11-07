import helperClass from "../utilities/dummy";
import dataStore from "../dummy/index";
/**
 * @exports
 * @class dummyController
 */
class dummyController {
  /**
   * Creates a new parcel
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static create(req, res) {
    const { uuid, parcelId } = req.body;
    const position = helperClass.findParcelByUser(dataStore, uuid, parcelId);
    if (position > -1) {
      return res.status(400).json({
        responseCode: "01",
        responseMessage:
          "Parcel Already Exists. Make sure uuid and parcelId are unique"
      });
    }
    dataStore.push(req.body);
    return res.status(201).json({
      responseCode: "00",
      responseMessage: "New parcel created successfully"
    });
  }
  /**
   * Deletes a parcel by id
   *
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static deleteOne(req, res) {
    const { id } = req.params;
    const position = helperClass.findParcel(dataStore, id);
    if (position > -1) {
      dataStore.splice(position, 1);
      return res.status(200).json({
        responseCode: "00",
        responseMessage: "parcel Deleted",
        data: dataStore
      });
    }
    return res.status(400).json({
      responseCode: "01",
      responseMessage: "parcel Could not be deleted. ID not found"
    });
  }
  /**
   * Find a parcel by id
   *
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static findById(req, res) {
    const { id } = req.params;
    const position = helperClass.findParcel(dataStore, id);
    if (position > -1) {
      return res.status(200).json({
        responseCode: "00",
        responseMessage: "Parcel found",
        data: dataStore[position]
      });
    }

    return res.status(400).json({
      responseCode: "01",
      responseMessage: "Parcel not found"
    });
  }
  /**
   * Get all parcels
   *
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getAll(req, res) {
    return res.status(200).json({
      responseCode: "00",
      responseMessage: "Successfully fetched all parcel parcels",
      data: dataStore
    });
  }

  /**
   * Get all parcels
   *
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getParcelsByUserId(req, res) {
    const { id } = req.params;

    console.log(id);

    const result = helperClass.findAllParcelByUserId(dataStore, id);

    if (result === undefined || result.length == 0) {
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "Parcel with userID not found"
      });
    }
    return res.status(200).json({
      responseCode: "00",
      responseMessage: "Parcel found",
      data: result
    });
  }
  /**
   * Delete all parcels
   *
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static deleteAll(req, res) {
    dataStore.length = 0;
    return res.status(200).json({
      responseCode: "00",
      responseMessage: "Data Source Emptied Successfully",
      data: dataStore
    });
  }
  /**
   * Update parcel by id
   *
   * @staticmethod
   * @param  {object} req - parcel object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static cancelParcel(req, res) {
    const { id } = req.params;
    console.log(id);
    const position = helperClass.findUserByParcelId(dataStore, id);
    if (position > -1) {
      dataStore[position].parcelStatus = "Cancelled";
      return res.status(200).json({
        responseCode: "00",
        responseMessage: "Parcel Order Cancelled",
        data: dataStore[position]
      });
    }
    return res.status(400).json({
      responseCode: "01",
      responseMessage: "parcel with this id is not found"
    });
  }
}

export default dummyController;
