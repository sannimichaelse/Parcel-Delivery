/* eslint-disable camelcase */
import jwt from 'jsonwebtoken';
import config from '../config/index';
import crypto from '../utilities/crypto';
import queryProvider from '../queries/index';

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
   * Find user by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static findUserById(id) {
    return new Promise((resolve, reject) => {
      queryProvider
        .findUserByIdQuery(id)
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
          const { password, id, is_admin } = res.rows[0];
          crypto
            .compare(userpassword, password)
            .then(() => {
              const token = jwt.sign({ user_id: id, is_admin }, config.jwtSecretKey, {
                expiresIn: 86400,
              });
              const data = {
                status: 200,
                message: 'Authentication Successful',
                data: res.rows[0],
                token,
              };
              resolve(data);
            })
            .catch((err) => {
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
