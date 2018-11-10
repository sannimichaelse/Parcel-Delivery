import { Router } from 'express';
import dummyController from '../controllers/dummyController';
import Middleware from '../middlewares/dummyMiddleware';

const router = Router();

router.post('/parcels/', Middleware.validateDummyData, dummyController.createParcel);
router.get('/parcels/', dummyController.getAllParcels);
router.get('/parcels/:parcelId', dummyController.findByParcelId);
router.get('/users/:userId/parcels', dummyController.getParcelsByUserId);
router.put('/parcels/:parcelId/cancel', dummyController.cancelByParcelId);

export default router;
