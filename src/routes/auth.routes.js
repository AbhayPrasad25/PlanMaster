import { Router } from "express";
import {login, registerUser} from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userRgisterValidator } from "../validators/index.js";



const router = Router();

router.route("/register").post(userRgisterValidator(),validate,registerUser);
router.route("/login").post(login);
export default router;
