import Joi from 'joi';

const uuid = Joi.string().trim()
  .min(1)
  .required();
const username = Joi.string().trim()
  .min(1)
  .required();
const userId = Joi.string().trim()
  .min(1)
  .required();
const parcelId = Joi.string().trim()
  .min(1)
  .required();
const parcelWeight = Joi.string().trim()
  .min(1)
  .required();
const parcelDestination = Joi.string().trim()
  .min(1)
  .required();
const parcelName = Joi.string().trim()
  .min(1)
  .required();
const parcelLocation = Joi.string().trim()
  .min(1)
  .required();
const parcelStatus = Joi.string().trim()
  .min(1)
  .required();

const dummySchema = {
  uuid,
  username,
  userId,
  parcelId,
  parcelWeight,
  parcelDestination,
  parcelLocation,
  parcelName,
  parcelStatus,
};

export default dummySchema;
