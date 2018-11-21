import bcrypt from 'bcrypt';

/**
 * @exports
 * @class comparePassword
 */
class ComparePassword {
/**
 * Userhelper Class
 * @staticmethod
 * @param  {string} newpassword
 * @param {string} dbpassword
 * @return {number} a
 */
  static compare(newpassword, dbpassword) {
    return new Promise((resolve, reject) => {
      // Load hash from your password DB.
      bcrypt.compare(newpassword, dbpassword).then((response) => {
        if (response) {
          resolve('Password Matched');
        } else {
          reject(new Error('Password not matched'));
        }
      });
    });
  }
}
export default ComparePassword;
