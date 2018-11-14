import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import authService from '../services/authService';
import db from '../connection/connect';
import passwd from '../helpers/compare-password';
import config from '../config/index';

/**
 * @exports
 * @class authController
 */
class authController {
  /**
   * Creates a new new
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static userSignup(req, res) {
    const {
      email,
    } = req.body;
    authService.findUserByEmail(email).then((response) => {
      const d = new Date();
      const now = moment(d).format('YYYY-MM-DD HH:mm:ss');
      req.body.role = 'user';
      req.body.now = now;
      authService.saveUser(req.body).then((resulter) => {
        return res.status(201).json({
          message: 'New User created successfully',
        });
      }).then((err) => {
        return res.status(500).json({
          message: 'Error Saving User',
        });
      });
    }).catch((err) => {
      return res.status(400).json({
        message: 'User Already Exists',
      });
    });
  }
  /**
   * Login User
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static userLogin(req, res) {
    const { username, password } = req.body;
    authService.findUserByUsername(username, 'user').then((user) => {
      console.log(user.data[0].id);
      passwd.compare(password, user.password).then((response) => {
        const token = jwt.sign({ data: user.data[0].id }, config.userSecret, {
          expiresIn: 86400, // expires in 24 hours
        });
        return res.status(200).json({
          message: 'Authentication Successful',
          data: user.data,
          token,
        });
      }).catch((err) => {
        console.log(err)
        return res.status(400).json({
          message: 'Please Check Username and Password',
        });
      });
    }).catch((error) => {
      return res.status(400).json({
        message: 'Please Check Username and Password',
      });
    });
  }
  /**
   * Creates a new admin
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static adminSignup(req, res) {
    const {
      email,
    } = req.body;
    authService.findAdminByEmail(email).then((response) => {
      const d = new Date();
      const now = moment(d).format('YYYY-MM-DD HH:mm:ss');
      req.body.role = 'admin';
      req.body.now = now;
      authService.saveUser(req.body).then((resulter) => {
        return res.status(201).json({
          message: 'New Admin created successfully',
        });
      }).then((err) => {
        return res.status(500).json({
          message: 'Error saving Admin',
        });
      });
    }).catch((err) => {
      return res.status(400).json({
        message: 'Admin Already Exists',
      });
    });
  }
  /**
   * Login Admin
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static adminLogin(req, res) {
    const { username, password } = req.body;
    authService.findAdminByUsername(username, 'admin').then((user) => {
      passwd.compare(password, user.password).then((response) => {
        const token = jwt.sign({ data: user }, config.adminSecret, {
          expiresIn: 86400, // expires in 24 hours
        });
        return res.status(200).json({
          message: 'Authentication Successful',
          data: user.data,
          token,
        });
      }).catch((err) => {
        return res.status(400).json({
          message: 'Please Check Username and Password',
        });
      });
    }).catch((error) => {
      return res.status(400).json({
        message: 'Please Check Username and Password',
      });
    });
  }
}

export default authController;