import { Router } from 'express';
import DummyController from '../controllers/DummyController';
import UserController from '../controllers/UserController';
import DummyMiddleware from '../middlewares/DummyMiddleware';
import UserMiddleware from '../middlewares/UserMiddleware';
import TokenMiddleware from '../middlewares/TokenMiddleware';
import ParcelMiddleware from '../middlewares/ParcelMiddleware';
import ParcelController from '../controllers/ParcelController';

const { validateLogin, validateSignup } = UserMiddleware;
const { createUser, loginUser } = UserController;
const { verifyToken } = TokenMiddleware;
const {
  getAllParcels,
  findParcelById,
  cancelByParcelId,
  createNewParcel,
  getParcelByUserId,
} = DummyController;

const {
  verifyAdmin,
  verifyUser,
  validateChangeParcelLocation,
  validateChangeParcelDestination,
  validateChangeParcelStatus,
  validateParcel,
} = ParcelMiddleware;

const {
  adminFindByParcelId,
  updateParcelStatus,
  updateParcelLocation,
  viewAllParcels,
  createParcel,
  viewUserParcels,
  findByParcelId,
  updateParcelDestination,
  cancelParcel,
} = ParcelController;

const router = Router();

// Dummy Routes
router.post('/parcels/', DummyMiddleware.validateDummyData, createNewParcel);
router.get('/parcels/', getAllParcels);
router.get('/parcels/:parcelId', findParcelById);
router.get('/users/:userId/parcels', getParcelByUserId);
router.put('/parcels/:parcelId/cancel', cancelByParcelId);

// User Routes
router.post('/auth/signup', validateSignup, createUser);
router.post('/auth/login', validateLogin, loginUser);

// Admin Routes
router.get(
  '/auth/admin/parcel/:id/',
  verifyToken,
  verifyAdmin,
  adminFindByParcelId,
);
router.put(
  '/auth/parcel/:id/status',
  verifyToken,
  verifyAdmin,
  validateChangeParcelStatus,
  updateParcelStatus,
);
router.put(
  '/auth/parcel/:id/location',
  verifyToken,
  verifyAdmin,
  validateChangeParcelLocation,
  updateParcelLocation,
);

router.get('/auth/admin/parcel/', verifyToken, verifyAdmin, viewAllParcels);

// Parcel Routes
router.post(
  '/auth/parcel',
  verifyToken,
  verifyUser,
  validateParcel,
  createParcel,
);
router.get('/auth/parcel/', verifyToken, verifyUser, viewUserParcels);
router.get('/auth/parcel/:id/', verifyToken, verifyUser, findByParcelId);
router.put(
  '/auth/parcel/:id/destination',
  verifyToken,
  verifyUser,
  validateChangeParcelDestination,
  updateParcelDestination,
);
router.get('/auth/parcel/:id/cancel', verifyToken, verifyUser, cancelParcel);

export default router;
