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
  .min(1).email()
  .required();
const username = Joi.string()
  .min(1)
  .required();
const password = Joi.string()
  .min(1).max(6)
  .required();


const signupSchema = {
  username,
  lastname,
  othername,
  firstname,
  email,
  password,
};

const loginSchema = {
  email,
  password,
};

export { signupSchema, loginSchema };
