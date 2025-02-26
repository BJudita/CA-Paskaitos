import express, { Router } from "express"
import { createNewBook, getAllBooks, getBookById } from "./controllers.js";

const router = express.Router();

router.get("/books", getAllBooks)
router.post("/books", createNewBook)
router.get("/books/:id", getBookById)


export default router;