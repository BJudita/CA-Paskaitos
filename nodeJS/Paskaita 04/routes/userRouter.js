import express from "express";
import { getAllUsers, getCar, getEmailByID, getEmailList, getGender } from "../controllers/users.js";

const router = express.Router();

// Apsirasome visus routes kuriuos norime tureti
router.get("/users", getAllUsers);
router.get("/users/car/:car", getCar);
router.get("/users/email", getEmailList);
router.get("/users/gender", getGender);
router.get("/users/:id", getEmailByID);

export default router;