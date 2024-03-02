import { Router } from "express";
import * as userController from "../controllers/users.js";

const router = Router();

// /api/users/register
router.post("/register", userController.postRegister);

export default router;
