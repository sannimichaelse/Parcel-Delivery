/* eslint-disable camelcase */

/**
 * @exports
 * @class Authorization
 */
class Authorization {
/**
 * Authorization
 * Verify TOKEN
 * @staticmethod
 * @param  {string} is_admin - Request object
 * @return {string} res.json
 */
  static checkPermissions(is_admin) {
    return new Promise((resolve, reject) => {
      if (is_admin) resolve('admin');
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('user');
    });
  }
}
export default Authorization;
