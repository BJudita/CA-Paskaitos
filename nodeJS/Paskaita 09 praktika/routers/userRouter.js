import express from "express";
import { createNewUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createNewUser);
router.get("/users", getUsers);

export default router;