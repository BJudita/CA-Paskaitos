import express from "express";
import { createNewOrder, deleteOrderById, getAllOrders, getOrderById, updateOrderById } from "../controllers/orderController.js";

const router = express.Router();

router.post("/orders", createNewOrder);
router.get("/orders", getAllOrders);
router.get("/orders/:id", getOrderById);
router.put("/orders/:id", updateOrderById);
router.delete("/orders/:id", deleteOrderById);

export default router;