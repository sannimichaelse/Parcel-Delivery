/* eslint-disable camelcase */
import queryProvider from '../../utilities/queries';
import NotificationService from '../../utilities/services/NotificationService';

/**
 * @exports
 * @class ParcelService
 */
class ParcelService {
  /**
   * Find user by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static viewAll(id) {
    return new Promise((resolve, reject) => {
      queryProvider
        .findUserParcelsQuery(id)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
  /**
   * Find by parcel id
   * @staticmethod
   * @param  {string} user_id - Request object
   * @param  {string} parcel_id - Request object
   * @return {string} res
   */
  static findByParcelId(user_id, parcel_id) {
    return new Promise((resolve, reject) => {
      queryProvider
        .findByUserAndParcelIdQuery(user_id, parcel_id)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
  /**
   * Admin Find by parcel id
   * @staticmethod
   * @param  {string} parcel_id - Request object
   * @return {string} res
   */
  static adminFindByParcelId(parcel_id) {
    return new Promise((resolve, reject) => {
      queryProvider
        .findByParcelIdQuery(parcel_id)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
  /**
   * view all parcels created
   * @staticmethod
   * @return {string} res
   */
  static viewAllCreated() {
    return new Promise((resolve, reject) => {
      queryProvider
        .findAllParcelsQuery()
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
  /**
   * update parcel status
   * @staticmethod
   * @param  {string} parcelId - Request object
   * @param  {string} body - Request object
   * @param  {string} host - Request object
   * @param  {string} user_id - Request object
   * @return {string} res
   */
  static updateStatus(parcelId, body, host) {
    return new Promise((resolve, reject) => {
      queryProvider
        .updateParcelStatusQuery(parcelId, body)
        .then((response) => {
          const { user_id } = response.rows[0];
          const emailBody = `Your Parcel Details has been updated by Admin <br><br> Parcel Name: ${response.rows[0].parcel} <br> Parcel Status : ${response.rows[0].status}`;
          NotificationService.sendMail(emailBody, host, user_id);
          resolve(response);
        })
        .catch(err => reject(err));
    });
  }
  /**
   * update parcel status
   * @staticmethod
   * @param  {string} parcelId - Request object
   * @param  {string} body - Request object
   * @param  {string} host - Request object
   * @return {string} res
   */
  static updateLocation(parcelId, body, host) {
    return new Promise((resolve, reject) => {
      queryProvider
        .updateParcelLocationQuery(parcelId, body)
        .then((response) => {
          const { user_id } = response.rows[0];
          const emailBody = `Your Parcel Details has been updated by Admin <br><br> Parcel Name: ${response.rows[0].parcel} <br> Parcel Location : ${response.rows[0].location}`;
          NotificationService.sendMail(emailBody, host, user_id);
          resolve(response);
        })
        .catch(err => reject(err));
    });
  }
  /**
   * cancel parcel status
   * @staticmethod
   * @param  {string} parcelId - Request object
   * @return {string} res
   */
  static cancelParcel(parcelId) {
    return new Promise((resolve, reject) => {
      queryProvider
        .cancelParcelStatusQuery(parcelId)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
}

export default ParcelService;
