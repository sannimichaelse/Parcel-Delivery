/* eslint-disable no-useless-escape */
import Joi from 'joi';
import { signupSchema, loginSchema } from '../utilities/userValidator';
/**
 *
 * @exports
 * @class UserMiddleware
 */
class UserMiddleware {
  /**
   * UserMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateSignup(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 400,
        message: 'Please fill all fields',
      });
    }
    Joi.validate(req.body, signupSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
  /**
   * UserMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateLogin(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        status: 400,
        message: 'Please fill all fields',
      });
    }
    Joi.validate(req.body, loginSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
}

export default UserMiddleware;
