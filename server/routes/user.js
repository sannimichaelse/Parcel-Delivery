import { Router } from "express";
import userController from "../controllers/dummyController";
// import UserMiddleware from "../middlewares/validators/users";

const router = Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.findById);
router.get("/:id/parcels", userController.getParcelsByUserId);
router.get("/:id/cancel", userController.cancelParcel);

export default router;
