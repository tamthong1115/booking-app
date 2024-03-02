import { Router } from "express";
import * as userController from "../controllers/users.js";
import validateRequest from "../validation/middlewares/schemaValidator.js";

const router = Router();

// /api/users/register
router.post("/register", validateRequest, userController.postRegister);

export default router;
