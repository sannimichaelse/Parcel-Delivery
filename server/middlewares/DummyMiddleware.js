import Joi from 'joi';
import dummySchema from '../utilities/dummyValidator.';
/**
 *
 * @exports
 * @class DummyMiddleware
 */
class DummyMiddleware {
  /**
   * DummyMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateDummyData(req, res, next) {
    Joi.validate(req.body, dummySchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
}

export default DummyMiddleware;
