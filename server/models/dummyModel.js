import Joi from 'joi';

const uuid = Joi.string()
  .min(1)
  .required();
const username = Joi.string()
  .min(1)
  .required();
const userId = Joi.string()
  .min(1)
  .required();
const parcelId = Joi.string()
  .min(1)
  .required();
const parcelWeigth = Joi.string()
  .min(1)
  .required();
const parcelDestination = Joi.string()
  .min(1)
  .required();
const parcelName = Joi.string()
  .min(1)
  .required();
const parcelLocation = Joi.string()
  .min(1)
  .required();
const parcelStatus = Joi.string()
  .min(1)
  .required();

const dummySchema = {
  uuid,
  username,
  userId,
  parcelId,
  parcelWeigth,
  parcelDestination,
  parcelLocation,
  parcelName,
  parcelStatus,
};

export default dummySchema;
