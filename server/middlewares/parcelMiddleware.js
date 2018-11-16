/* eslint-disable camelcase */
import Joi from 'joi';
import { parcelSchema, updateParcelDestinationSchema, updateParcelStatusSchema, updateParcelLocationSchema } from '../models/parcelModel';
import Authorization from './permission';
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
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
  /**
   * parcelMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateChangeParcelDestination(req, res, next) {
    Joi.validate(req.body, updateParcelDestinationSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
  /**
   * parcelMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateChangeParcelStatus(req, res, next) {
    Joi.validate(req.body, updateParcelStatusSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
  /**
   * parcelMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validateChangeParcelLocation(req, res, next) {
    Joi.validate(req.body, updateParcelLocationSchema)
      .then(() => next())
      .catch(err => res.status(400).json({
        status: 400,
        statusMessage: err.details[0].message.replace(/[\"]/gi, ''),
      }));
  }
  /**
   * parcelMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static verifyAdmin(req, res, next) {
    const { is_admin } = req.decoded;
    Authorization.checkPermissions(is_admin).then(() => next()).catch(() => res.status(403).json({
      status: 403,
      statusMessage: 'Unathorized User',
    }));
  }

  /**
   * parcelMiddleware
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static verifyUser(req, res, next) {
    const { is_admin } = req.decoded;
    Authorization.checkPermissions(is_admin).then(() => res.status(403).json({
      status: 403,
      statusMessage: 'Unauthorized User',
    })).catch(() => next());
  }
}

export default parcelMiddleware;
