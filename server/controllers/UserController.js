import UserService from '../utilities/services/UserService';

/**
 * @exports
 * @class UserController
 */
class UserController {
/**
 * Creates a new user
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static createUser(req, res) {
    UserService
      .saveUser(req.body)
      .then(() => res.status(201).json({
        status: 201,
        statusMessage: 'New user created successfully',
      }))
      .catch((err) => {
        if (err.rowCount >= 1) {
          return res.status(400).json({
            status: 400,
            statusMessage: `User with this email ${
              err.rows[0].email
            } exists already`,
          });
        }
        return res.status(400).json({
          statusMessage: 'Could not save user',
        });
      });
  }

  /**
 * Creates a new user
 * @staticmethod
 * @param  {object} req - user object
 * @param {object} res - Response object
 * @return {json} res.json
 */
  static loginUser(req, res) {
    const { email, password } = req.body;
    UserService
      .validateUserLogin(email, password)
      .then(response => res.status(200).json(response))
      .catch(err => res.status(400).json({
        responseMessage: err,
      }));
  }
}

export default UserController;
