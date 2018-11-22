import { Router } from 'express';
import DummyController from '../controllers/DummyController';
import UserController from '../controllers/UserController';
import DummyMiddleware from '../middlewares/DummyMiddleware';
import UserMiddleware from '../middlewares/UserMiddleware';
import TokenMiddleware from '../middlewares/TokenMiddleware';
import ParcelMiddleware from '../middlewares/ParcelMiddleware';
import ParcelController from '../controllers/ParcelController';

const { validateLogin, validateSignup, validateParams } = UserMiddleware;
const { createUser, loginUser } = UserController;
const { verifyToken } = TokenMiddleware;
const {
  getAllParcels,
  findParcelById,
  cancelByParcelId,
  createNewParcel,
  getParcelByUserId
} = DummyController;

const {
  verifyAdmin,
  verifyUser,
  validateChangeParcelLocation,
  validateChangeParcelDestination,
  validateChangeParcelStatus,
  validateParcel
} = ParcelMiddleware;

const {
  adminFindByParcelId,
  updateParcelStatus,
  updateParcelLocation,
  viewAllParcels,
  createParcel,
  viewUserParcels,
  viewUserParcelsById,
  findByParcelId,
  updateParcelDestination,
  cancelParcel
} = ParcelController;

const router = Router();

// Dummy Routes
router.post('/parcel/', DummyMiddleware.validateDummyData, createNewParcel);
router.get('/parcel/', getAllParcels);
router.get('/parcel/:parcelId', findParcelById);
router.get('/users/:userId/parcel', getParcelByUserId);
router.put('/parcel/:parcelId/cancel', cancelByParcelId);

// User Routes
router.post('/auth/signup', validateSignup, createUser);
router.post('/auth/login', validateLogin, loginUser);

// Admin Routes
router.get(
  '/parcels/:id/',
  verifyToken,
  verifyAdmin,
  validateParams,
  adminFindByParcelId
);
router.put(
  '/parcels/:id/status',
  verifyToken,
  verifyAdmin,
  validateChangeParcelStatus,
  validateParams,
  updateParcelStatus
);
router.put(
  '/parcels/:id/location',
  verifyToken,
  verifyAdmin,
  validateChangeParcelLocation,
  validateParams,
  updateParcelLocation
);

router.get('/parcels/', verifyToken, verifyAdmin, viewAllParcels);

// Parcel Routes
router.post('/parcels', verifyToken, verifyUser, validateParcel, createParcel);
router.get('/users/parcels/', verifyToken, verifyUser, viewUserParcels);
router.get(
  '/users/parcels/:id/',
  verifyToken,
  verifyUser,
  validateParams,
  findByParcelId
);
router.get(
  '/users/:id/parcels',
  verifyToken,
  verifyUser,
  validateParams,
  viewUserParcelsById
);
router.put(
  '/parcels/:id/destination',
  verifyToken,
  verifyUser,
  validateChangeParcelDestination,
  validateParams,
  updateParcelDestination
);
router.get(
  '/parcels/:id/cancel',
  verifyToken,
  verifyUser,
  validateParams,
  cancelParcel
);

export default router;
