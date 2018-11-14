import jwt from 'jsonwebtoken';
import config from '../config/index';
/**
 * @exports
 * @class tokenMiddleware
 */
class tokenMiddleware {
/**
 * tokenMiddleware
 * Verify TOKEN
 * @staticmethod
 * @param  {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - middleware next (for error handling)
 * @return {json} res.json
 */
  static verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.accesstoken || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
        if (err) {
          return res
            .status(400)
            .json({
              verifyToken: false,
              message: 'Failed to authenticate token.',
            });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).send({
        verifyToken: false,
        message: 'No token provided.',
      });
    }
  }
}
export default tokenMiddleware;
