import mongoose from "mongoose";
import userModel from "../models/UserModel.js";
import orderModel from "../models/OrderModel.js";

export async function createNewUser(req, res) {
  const { name, email, age } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "This email already exists" });
    }

    if (age && isNaN(age)) {
      return res.status(400).json({ error: "Incorrect age, make sure it's a number" });
    }

    const newUser = new userModel({
      name,
      email,
      age,
    });

    const userResponse = await newUser.save();
    res.json(userResponse);
  } catch (error) {
    res.status(500).json({ error: "Internet server error" });
  }
}

export async function getAllUsers(req, res) {
    try {
        const  users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Internet server error" });
    }
}

export async function getUserById(req, res) {
 const { id } = req.params;

 if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

    try {
        const  user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internet server error" });
    }
}

export async function updateUserById(req, res) {
    const { id } = req.params;
    const { name, email, age } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }
  
    try {
      const user = await userModel.findById(id);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser && existingUser._id.toString() !== id) {
        return res.status(400).json({ error: "This email already exists" });
    } 
  
      user.name = name;
      user.email = email;
      user.age = age;
  
      await user.save();
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  export async function deleteUserById(req, res) {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }
  
    try {
      const deletedUser = await userModel.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }