import Joi from 'joi';
import parcelSchema from '../models/parcelModel';
/**
 *
 * @exports
 * @class parcelMiddleware
 */
class parcelMiddleware {
  /**
   * parcelMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateParcel(req, res, next) {
    Joi.validate(req.body, parcelSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message,
      }));
  }
}

export default parcelMiddleware;
