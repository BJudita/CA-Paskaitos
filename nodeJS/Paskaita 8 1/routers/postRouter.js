import express from "express";
import { createNewPost } from "../controllers/postControllers.js";

const router = express.Router();

router.post("/post", createNewPost);
router.get("/post");

export default router;