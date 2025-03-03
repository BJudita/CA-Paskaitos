import express, { Router } from "express"
import { createNewItem, deleteItemById, getItems, } from "./controllers.js";
import { validateItem } from "./validateItem.js";
import { validateItemId } from "./validateItemId.js";

const router = express.Router();
router.get("/items",  validateItem, getItems)
router.post("/items", validateItem, createNewItem)
router.delete("/items/:id", validateItemId, deleteItemById)

export default router;