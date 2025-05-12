import express from "express";
import { getMyReviews } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/authController.js";

const router = express.Router();

router.get('/profile', authenticate, getProfile);
router.get('/me/reviews', authenticate, getMyReviews);

export default router;
