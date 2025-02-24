import express from "express";
import { createNewPost, getPostById, getAllPosts, updatePostById, deletePostById } from "../controllers/postControllers.js";

const router = express.Router();

router.get("/posts", getAllPosts)
//gets a car by id
router.get("/posts/:id", getPostById)
// creats new car
router.post("/posts", createNewPost)
// update a car by id
router.put("/posts/:id", updatePostById)
// delete
router.delete("/posts/:id", deletePostById)
export default router;