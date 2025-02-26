import express, { Router } from "express"
import { createNewCar, deleteCarById, getAllCars, getCarById, updateCarById } from "./controllers.js";

const router = express.Router();

router.get("/cars", getAllCars)
router.post("/cars", createNewCar)
router.put("/cars/:id", updateCarById)
router.delete("/cars/:id", deleteCarById)
router.get("/cars/:id", getCarById)

export default router;