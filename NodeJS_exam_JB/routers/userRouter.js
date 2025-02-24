import express from "express";
import { createNewUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createNewUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;