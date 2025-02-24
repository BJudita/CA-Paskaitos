import express from "express";
import { getArticles } from "./frontend/script.js";

const router = express.Router();

router.get("/article", getArticles)
//gets a car by id
// router.get("/cars/:id", getCarById)
// // creats new car
// router.post("/cars", createNewCar)
// // update a car by id
// router.put("/cars/:id", updateCarById)
// // delete
// router.delete("/cars/:id", deleteCarById)
export default router;