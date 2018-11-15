/* eslint-disable camelcase */
import bcrypt from 'bcrypt';
import moment from 'moment';
import db from '../connection/connect';
import { stat } from 'fs';

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
   * save new user
   * @staticmethod
   * @param  {string} body - Request object
   * @return {string} res
   */
  static saveUserQuery(body) {
    const {
 firstname, lastname, othername, email, username, password 
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
   * Find user by email
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static findByParcelId(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE email = '${id}'`;
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
    console.log('Logged-in User ' +userid);
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
}

export default queryProvider;