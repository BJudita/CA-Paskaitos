import express from "express";
import { createNewCar, getCarById, getAllCars, updateCarById, deleteCarById } from "../controllers/carControllers.js";

const router = express.Router();

router.get("/cars", getAllCars)
//gets a car by id
router.get("/cars/:id", getCarById)
// creats new car
router.post("/cars", createNewCar)
// update a car by id
router.put("/cars/:id", updateCarById)
// delete
router.delete("/cars/:id", deleteCarById)
export default router;