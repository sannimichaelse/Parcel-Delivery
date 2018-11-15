import queryProvider from '../queries/index';

/**
 * @exports
 * @class parcelService
 */
class parcelService {
  /**
   * Find user by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static viewAll(id) {
    return new Promise((resolve, reject) => {
      queryProvider
        .findAllUserParcels(id)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  /**
   * save new parcel
   * @staticmethod
   * @param  {string} body - Request object
   * @param  {string} userid - Request object
   * @return {string} res
   */
  static saveParcel(body, userid) {
    return new Promise((resolve, reject) => {
      queryProvider
        .saveParcelQuery(body, userid)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
  /**
   * update parcel destination
   * @staticmethod
   * @param  {string} parcelId - Request object
   * @param  {string} body - Request object
   * @return {string} res
   */
  static updateDestination(parcelId, body) {
    return new Promise((resolve, reject) => {
      queryProvider
        .updateParcelDestinationQuery(parcelId, body)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
}

export default parcelService;
