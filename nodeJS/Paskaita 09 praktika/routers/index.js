import express from "express";
import membershipRouter from "./membershipRouter.js";
import userRouter from "./userRouter.js";


const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(membershipRouter);

export default mainRouter;
