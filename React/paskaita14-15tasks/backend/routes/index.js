import express from "express";
import taskRouter from "./taskRouter.js"
import columnRouter from "./columnRouter.js"

const router = express.Router();
router.use(taskRouter)
router.use(columnRouter)

export default router;