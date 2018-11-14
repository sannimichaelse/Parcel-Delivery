import Joi from 'joi';

const firstname = Joi.string()
  .min(1)
  .required();
const lastname = Joi.string()
  .min(1)
  .required();
const othername = Joi.string()
  .min(1)
  .required();
const email = Joi.string()
  .min(1)
  .required();
const username = Joi.string()
  .min(1)
  .required();
const registered = Joi.string()
  .min(1)
  .required();


const signupSchema = {
  username,
  lastname,
  registered,
  othername,
  firstname,
  email,
};

export default signupSchema;
