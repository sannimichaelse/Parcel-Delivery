import Joi from 'joi';
import dummySchema from '../models/dummyModel';
/**
 *
 * @exports
 * @class dummyMiddleware
 */
class dummyMiddleware {
  /**
   * dummyMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateDummyData(req, res, next) {
    Joi.validate(req.body, dummySchema)
      .then(value => next())
      .catch((err) => {
        return res.status(400).json({
          responseCode: '01',
          responseMessage: err.details[0].message,
        });
      });
  }
}

export default dummyMiddleware;
