import Joi from 'joi';

const weight = Joi.string()
  .min(1)
  .required();
const parcel = Joi.string()
  .min(1)
  .required();
const weightMetric = Joi.string()
  .min(1)
  .required();
const status = Joi.string()
  .min(1)
  .required();
const location = Joi.string()
  .min(1)
  .required();
const destination = Joi.string()
  .min(1)
  .required();

const parcelSchema = {
  parcel,
  weight,
  weightMetric,
  status,
  location,
  destination,
};


export default parcelSchema;
