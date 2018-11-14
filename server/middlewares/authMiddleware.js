import Joi from 'joi';
import { signupSchema, loginSchema } from '../models/authModel';
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
  static validateSignup(req, res, next) {
    Joi.validate(req.body, signupSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message,
      }));
  }
  /**
   * authMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateLogin(req, res, next) {
    Joi.validate(req.body, loginSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message,
      }));
  }
}

export default authMiddleware;
