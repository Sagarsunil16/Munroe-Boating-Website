import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router()
userRouter.post('/booking',userController.booking)
userRouter.post('/contact',userController.contact)
export default userRouter