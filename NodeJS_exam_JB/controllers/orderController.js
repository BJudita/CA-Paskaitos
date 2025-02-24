import mongoose from "mongoose";
import userModel from "../models/UserModel.js";
import orderModel from "../models/OrderModel.js";

export async function createNewOrder(req, res) {
  const { userId, product, quantity, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user id" });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const newOrder = new orderModel({
      userId,
      product,
      quantity,
      status,
    });

    const orderResponse = await newOrder.save();
    res.json(orderResponse);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({
          error:
            'Invalid status. Allowed values: "pending", "shipped", "delivered".',
        });
    }
    res.status(500).json({ error: "Internet server error" });
  }
}

export async function getAllOrders(req, res) {
  try {
    const orders = await orderModel.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internet server error" });
  }
}

export async function getOrderById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const order = await orderModel.findById(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internet server error" });
  }
}

export async function updateOrderById(req, res) {
  const { id } = req.params;
  const { userId, product, quantity, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  if (userId && !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user id" });
  }

  try {
    const order = await orderModel.findById(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (userId) {
      try {
        const user = await userModel.findById(userId);
        if (!user) {
          return res.status(400).json({ error: "User not found" });
        }
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    }

    order.userId = userId;
    order.product = product;
    order.quantity = quantity;
    order.status = status;

    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteOrderById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const deletedOrder = await orderModel.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
