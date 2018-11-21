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

// Admin Routes
router.put('/auth/parcel/:id/status', tokenMiddleware.verifyToken, parcelMiddleware.verifyAdmin, parcelMiddleware.validateChangeParcelStatus, parcelController.updateParcelStatus);
router.put('/auth/parcel/:id/location', tokenMiddleware.verifyToken, parcelMiddleware.verifyAdmin, parcelMiddleware.validateChangeParcelLocation, parcelController.updateParcelLocation);
router.get('/auth/admin/parcel/', tokenMiddleware.verifyToken, parcelMiddleware.verifyAdmin, parcelController.viewAllParcels);

// Parcel Routes
router.post('/auth/parcel', tokenMiddleware.verifyToken, parcelMiddleware.verifyUser, parcelMiddleware.validateParcel, parcelController.createParcel);
router.get('/auth/parcel/', tokenMiddleware.verifyToken, parcelMiddleware.verifyUser, parcelController.viewUserParcels);
router.get('/auth/parcel/:id/', tokenMiddleware.verifyToken, parcelMiddleware.verifyUser, parcelController.findByParcelId);
router.put('/auth/parcel/:id/destination', tokenMiddleware.verifyToken, parcelMiddleware.verifyUser, parcelMiddleware.validateChangeParcelDestination, parcelController.updateParcelDestination);
router.get('/auth/parcel/:id/cancel', tokenMiddleware.verifyToken, parcelMiddleware.verifyUser, parcelController.cancelParcel);

export default router;
