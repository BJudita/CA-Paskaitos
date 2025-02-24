import express from "express";
import { getUsers } from "../controllers/userControllers.js";
import { createUser } from "../controllers/userControllers.js";
import { updateAllUsersAge } from "../controllers/userControllers.js";
import { deleteAllUsers } from "../controllers/userControllers.js";

const router = express.Router();

// Apsirasome visus routes kuriuos norime tureti
// pasiims
router.get("/users", getUsers);
// prides nauja
router.post("/users", createUser);
// atnaujins
router.put("/users", updateAllUsersAge);
// istrins
router.delete("/users", deleteAllUsers);

export default router;