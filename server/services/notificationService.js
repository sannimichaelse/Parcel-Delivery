import sgMail from '@sendgrid/mail';
import config from '../config/index';


/**
 * @exports
 * @class notificationService
 */
class notificationService {
  /**
   * Send Mail to User when Admin change status or location
   * @staticmethod
   * @param  {string} email - Request object
   * @param  {string} host - Request object
   * @return {string} res
   */
  static sendMail(email, host) {
    sgMail.setApiKey(config.sendGridKey);
    const msg = {
      to: email,
      from: 'Soft Signatures Lab 👻 <sannimichaeltomiwa@gmail.com>',
      subject: 'EMAIL VERIFICATION',
      html:
          'Hello,<br> Please Click',
    };
    sgMail.send(msg);
  }
}

export default notificationService;
