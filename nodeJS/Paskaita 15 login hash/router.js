import express from "express";
import { loginUser, registerUser } from "./controllers.js";
import { validateJwtMiddleware } from "./jwValidationMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/dashboard", validateJwtMiddleware, (req, res) => {
    res.json({ message: "Welcome to the Dashboard" });
  });

export default router;