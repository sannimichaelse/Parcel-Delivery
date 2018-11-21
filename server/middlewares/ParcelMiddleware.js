/* eslint-disable camelcase */
import Joi from 'joi';
import { parcelSchema, updateParcelDestinationSchema, updateParcelStatusSchema, updateParcelLocationSchema } from '../utilities/parcelValidator';
import Authorization from './Authorization';
/**
 *
 * @exports
 * @class ParcelMiddleware
 */
class ParcelMiddleware {
  /**
   * ParcelMiddleware
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
   * ParcelMiddleware
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
   * ParcelMiddleware
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
   * ParcelMiddleware
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
   * ParcelMiddleware
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
      statusMessage: 'User cannot Visit this route',
    }));
  }

  /**
   * ParcelMiddleware
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
      statusMessage: 'Only users can visit this route',
    })).catch(() => next());
  }
}

export default ParcelMiddleware;
