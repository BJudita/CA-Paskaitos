import express from "express";
import { createNewMembership, deleteMembership, getMemberships } from "../controllers/membershipController.js";

const router = express.Router();

router.post("/memberships", createNewMembership);
router.get("/memberships", getMemberships);
router.delete("/memberships/:id", deleteMembership);

export default router;