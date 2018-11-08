import { Router } from 'express';
import dummyController from '../controllers/dummyController';
import Middleware from '../middlewares/dummyMiddleware';

const router = Router();

router.post('/', Middleware.validateDummyData, dummyController.create);
router.get('/', dummyController.getAll);
router.get('/:id', dummyController.findById);
router.get('/:id/parcels', dummyController.getParcelsByUserId);
router.get('/:id/cancel', dummyController.cancelParcel);

export default router;
