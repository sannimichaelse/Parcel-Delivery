import Joi from 'joi';

const firstname = Joi.string()
  .trim()
  .min(1)
  .required();
const lastname = Joi.string()
  .trim()
  .min(1)
  .required();
const othername = Joi.string()
  .trim()
  .min(1)
  .required();
const email = Joi.string()
  .trim()
  .min(1)
  .email()
  .required();
const username = Joi.string()
  .trim()
  .min(1)
  .required();
const password = Joi.string()
  .trim()
  .min(6)
  .max(12)
  .required();
const id = Joi.number()
  .required();

const signupSchema = {
  username,
  lastname,
  othername,
  firstname,
  email,
  password
};

const loginSchema = {
  email,
  password
};

const paramSchema = {
  id,
};

export { signupSchema, loginSchema, paramSchema };
