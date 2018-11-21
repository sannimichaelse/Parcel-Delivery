/* eslint-disable camelcase */
import bcrypt from 'bcrypt';
import moment from 'moment';
import db from '../connection/connect';

const saltRounds = 10;
const obj = {};
const err = {};

/**
 * @exports
 * @class queryProvider
 */
class queryProvider {
  /**
   * Find user by email
   * @staticmethod
   * @param  {string} email - Request object
   * @return {string} res
   */
  static findUserByEmailQuery(email) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = '${email}'`;
      db.query(query)
        .then((result) => {
          if (result.rowCount === 0) {
            err.responseMessage = 'user does not exist';
            err.responseCode = '01';
            reject(err);
          } else if (result.rowCount >= 1) {
            obj.rowCount = result.rowCount;
            obj.rows = result.rows;
            resolve(obj);
          }
        })
        .catch(() => {
          err.responseMessage = 'Error Finding User';
          err.responseCode = '02';
          reject(err);
        });
    });
  }
  /**
   * Find user by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static findUserByIdQuery(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = '${id}'`;
      db.query(query)
        .then((result) => {
          if (result.rowCount === 0) {
            err.responseMessage = 'user does not exist';
            err.responseCode = '01';
            reject(err);
          } else if (result.rowCount >= 1) {
            obj.rowCount = result.rowCount;
            obj.rows = result.rows;
            resolve(obj);
          }
        })
        .catch(() => {
          err.responseMessage = 'Error Finding User';
          err.responseCode = '02';
          reject(err);
        });
    });
  }
  /**
   * Findby by parcelID
   * @staticmethod
   * @param  {string} id
   * @return {string} res
   */
  static findByParcelIdQuery(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM parcels WHERE id = '${id}'`;
      db.query(query)
        .then((result) => {
          if (result.rowCount === 0) {
            const response = 'Parcel does not exist';
            reject(response);
          } else if (result.rowCount >= 1) {
            obj.rowCount = result.rowCount;
            obj.rows = result.rows;
            resolve(obj);
          }
        })
        .catch(() => {
          const error = 'Error Finding User';
          reject(error);
        });
    });
  }
  /**
   * save new user
   * @staticmethod
   * @param  {string} body - Request object
   * @return {string} res
   */
  static saveUserQuery(body) {
    const {
      firstname, lastname, othername, email, username, password,
    } = body;

    const d = new Date();
    const is_admin = false;
    const registered_at = moment(d).format('YYYY-MM-DD HH:mm:ss');

    return new Promise((resolve, reject) => {
      this.findUserByEmailQuery(email)
        .then((error) => {
          reject(error);
        })
        .catch(() => {
          bcrypt.hash(password, saltRounds).then((hash) => {
            const queryBody = `
                              INSERT INTO users(firstname, lastname, othername, email, username, password, registered_at, is_admin)
                              VALUES ('${firstname}', '${lastname}', '${othername}', '${email}','${username}','${hash}','${registered_at}', '${is_admin}')`;
            db.query(queryBody)
              .then((result) => {
                if (result.rowCount >= 1) {
                  resolve('Data Saved');
                } else if (result.rowCount === 0) {
                  const response = 'Could Not Save User';
                  reject(response);
                }
              })
              .catch((e) => {
                reject(e);
              });
          });
        });
    });
  }
  /**
   * Find All parcels created by user
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static findUserParcelsQuery(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM parcels WHERE user_id = '${id}'`;
      db.query(query)
        .then((result) => {
          if (result.rowCount === 0) {
            err.responseMessage = 'Parcels Array Empty';
            err.responseCode = '01';
            reject(err);
          } else if (result.rowCount >= 1) {
            obj.rowCount = result.rowCount;
            obj.rows = result.rows;
            resolve(obj);
          }
        })
        .catch(() => {
          err.responseMessage = 'Error Finding All User Parcels';
          err.responseCode = '02';
          reject(err);
        });
    });
  }
  /**
   * Find All created parcels
   * @staticmethod
   * @return {string} res
   */
  static findAllParcelsQuery() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM parcels';
      db.query(query)
        .then((result) => {
          if (result.rowCount === 0) {
            err.responseMessage = 'Parcels Array Empty';
            err.responseCode = '01';
            reject(err);
          } else if (result.rowCount >= 1) {
            obj.rowCount = result.rowCount;
            obj.rows = result.rows;
            resolve(obj);
          }
        })
        .catch(() => {
          err.responseMessage = 'Error Finding All Parcels';
          err.responseCode = '02';
          reject(err);
        });
    });
  }
  /**
   * Save Parcel Query
   * @staticmethod
   * @param  {string} body - Request object
   * @param  {string} userid - Request object
   * @return {string} res
   */
  static saveParcelQuery(body, userid) {
    const {
      parcel,
      weight,
      weightMetric,
      status,
      location,
      destination,
    } = body;

    const d = new Date();
    console.log(`Logged-in User ${userid}`);
    const sentOn = moment(d).format('YYYY-MM-DD HH:mm:ss');
    const deliveredOn = moment(d).format('YYYY-MM-DD HH:mm:ss');

    return new Promise((resolve, reject) => {
      const queryBody = `
      INSERT INTO parcels(user_id, parcel, weight, weightMetric, sent_on, delivered_on, status, location, destination)
      VALUES ('${userid}','${parcel}', '${weight}', '${weightMetric}', '${sentOn}','${deliveredOn}','${status}','${location}', '${destination}')`;
      db.query(queryBody)
        .then((result) => {
          if (result.rowCount >= 1) {
            resolve('Data Saved');
          } else if (result.rowCount === 0) {
            const response = 'Could Not Save User';
            reject(response);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
  /**
   * Update Parcel Destination Query
   * @staticmethod
   * @param  {string} parcelid - Request object
   * @param  {string} body - Request object
   * @return {string} res
   */
  static updateParcelDestinationQuery(parcelid, body) {
    const { destination } = body;
    const exception = 'delivered';
    return new Promise((resolve, reject) => {
      const queryBody = `UPDATE parcels SET destination = '${destination}' WHERE id = '${parcelid}' AND status <> '${exception}'`;
      db.query(queryBody)
        .then((result) => {
          if (result.rowCount >= 1) {
            this.findByParcelIdQuery(parcelid).then((response) => {
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
          } else if (result.rowCount === 0) {
            const response = 'Parcel Id not found. Might have been delivered';
            reject(response);
          }
        })
        .catch((e) => {
          const response = 'Error Updating Destination';
          reject(response);
        });
    });
  }
  /**
   * Update Parcel Status Query
   * @staticmethod
   * @param  {string} parcelid - Request object
   * @param  {string} body - Request object
   * @return {string} res
   */
  static updateParcelStatusQuery(parcelid, body) {
    const { status } = body;
    return new Promise((resolve, reject) => {
      const queryBody = `UPDATE parcels SET status = '${status}' WHERE id = '${parcelid}'`;
      db.query(queryBody)
        .then((result) => {
          if (result.rowCount >= 1) {
            this.findByParcelIdQuery(parcelid).then((response) => {
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
          } else if (result.rowCount === 0) {
            const response = 'Parcel Id not found';
            reject(response);
          }
        })
        .catch((e) => {
          const response = 'Error Updating Status Parcel';
          reject(response);
        });
    });
  }

  /**
   * Update Location Status Query
   * @staticmethod
   * @param  {string} parcelid - Request object
   * @param  {string} body - Request object
   * @return {string} res
   */
  static updateParcelLocationQuery(parcelid, body) {
    const { location } = body;
    return new Promise((resolve, reject) => {
      const queryBody = `UPDATE parcels SET location = '${location}' WHERE id = '${parcelid}'`;
      db.query(queryBody)
        .then((result) => {
          if (result.rowCount >= 1) {
            this.findByParcelIdQuery(parcelid).then((response) => {
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
          } else if (result.rowCount === 0) {
            const response = 'Parcel Id not found';
            reject(response);
          }
        })
        .catch((e) => {
          const response = 'Error Updating Location Parcel';
          reject(response);
        });
    });
  }
  /**
   * Delete user by email
   * @staticmethod
   * @param  {string} email - Request object
   * @return {string} res
   */
  static deleteUserByEmailQuery(email) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM users WHERE email = '${email}'`;
      db.query(query)
        .then((result) => {
          if (result.rowCount === 0) {
            const message = 'user does not exist';
            reject(message);
          } else if (result.rowCount >= 1) {
            const response = 'User Deleted';
            resolve(response);
          }
        })
        .catch((error) => {
          const messager = 'Error Finding User';
          reject(error);
        });
    });
  }
  /**
   * Cancel Parcel Status Query
   * @staticmethod
   * @param  {string} parcelid - Request object
   * @param  {string} body - Request object
   * @return {string} res
   */
  static cancelParcelStatusQuery(parcelid) {
    const exception = 'delivered';
    return new Promise((resolve, reject) => {
      const queryBody = `UPDATE parcels SET status = 'Cancelled' WHERE id = '${parcelid}' AND status <> '${exception}'`;
      db.query(queryBody)
        .then((result) => {
          if (result.rowCount >= 1) {
            this.findByParcelIdQuery(parcelid).then((response) => {
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
          } else if (result.rowCount === 0) {
            const response = 'Parcel Id not found. Might have been delivered';
            reject(response);
          }
        })
        .catch((e) => {
          const response = 'Error Updating Destination';
          reject(response);
        });
    });
  }
}

export default queryProvider;
