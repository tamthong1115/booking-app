import { Router } from "express";
import validationRequest from "../validation/middlewares/schemaValidator";
import { postLogin, postRegister } from "../controllers/auth";

const router = Router();

//api/auth
router.post("/login", validationRequest, postLogin);
router.post("/register", validationRequest, postRegister);

export default router;
