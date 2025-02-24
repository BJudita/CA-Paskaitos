import express from "express";
import { createNewCar } from "./controllers.js";

const router = express.Router();

router.post("/cars", createNewCar);

export default router;