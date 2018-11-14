import Joi from 'joi';
import authSchema from '../models/authModel';
/**
 *
 * @exports
 * @class authMiddleware
 */
class authMiddleware {
  /**
   * authMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateDummyData(req, res, next) {
    Joi.validate(req.body, authSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message,
      }));
  }
}

export default authMiddleware;
