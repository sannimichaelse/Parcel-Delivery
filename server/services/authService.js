import jwt from 'jsonwebtoken';
import config from '../config/index';
import crypto from '../utilities/crypto';
import queryProvider from '../queries/index';
import db from '../connection/connect';

/**
 * @exports
 * @class authService
 */
class authService {
  /**
   * Find user by email
   * @staticmethod
   * @param  {string} email - Request object
   * @return {string} res
   */
  static findUserByEmail(email) {
    return new Promise((resolve, reject) => {
      queryProvider
        .findUserByEmailQuery(email)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }

  /**
   * save new user
   * @staticmethod
   * @param  {string} body - Request object
   * @return {string} res
   */
  static saveUser(body) {
    return new Promise((resolve, reject) => {
      queryProvider
        .saveUserQuery(body)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  }
  /**
   * updatePasswordByToken
   * @staticmethod
   * @param  {string} email - newpassword
   *  @param  {string} userpassword - token
   * @return {string} res
   */
  static validateUserLogin(email, userpassword) {
    return new Promise((resolve, reject) => {
      this.findUserByEmail(email)
        .then((res) => {
          const dbpassword = res.rows[0].password;
          const userid = res.rows[0].id;
          crypto
            .compare(userpassword, dbpassword)
            .then(() => {
              const token = jwt.sign({ data: userid }, config.jwtSecretKey, {
                expiresIn: 86400,
              });
              const data = {
                message: 'Authentication Successful',
                data: res.rows[0],
                token,
              };
              resolve(data);
            })
            .catch(() => {
              const response = 'Wrong Password and Email Combination';
              reject(response);
            });
        })
        .catch((err) => {
          const response = 'Wrong Email and Password Combination. Please Check your credentials';
          reject(response);
        });
    });
  }
}

export default authService;
