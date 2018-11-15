import { Router } from 'express';
import dummyController from '../controllers/dummyController';
import authController from '../controllers/authController';
import dummyMiddleware from '../middlewares/dummyMiddleware';
import authMiddleware from '../middlewares/authMiddleware';
import tokenMiddleware from '../middlewares/token';
import parcelMiddleware from '../middlewares/parcelMiddleware';
import parcelController from '../controllers/parcelController';

const router = Router();

// Dummy Routes
router.post('/parcels/', dummyMiddleware.validateDummyData, dummyController.createParcel);
router.get('/parcels/', dummyController.getAllParcels);
router.get('/parcels/:parcelId', dummyController.findByParcelId);
router.get('/users/:userId/parcels', dummyController.getParcelsByUserId);
router.put('/parcels/:parcelId/cancel', dummyController.cancelByParcelId);

// User Routes
router.post('/auth/signup', authMiddleware.validateSignup, authController.createUser);
router.post('/auth/login', authMiddleware.validateLogin, authController.loginUser);
router.post('/auth/parcel', tokenMiddleware.verifyToken, parcelMiddleware.validateParcel, parcelController.createParcel);

export default router;
