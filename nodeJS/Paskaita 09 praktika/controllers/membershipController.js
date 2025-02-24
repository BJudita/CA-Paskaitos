import mongoose from "mongoose";
import MembershipModel from "../models/membershipModel.js";

export async function getMemberships(req, res) {
    try {
      const memberships = await MembershipModel.find();
      res.json(memberships);
    } catch (error) {
      res.status(500).json({ message: "Failed to load memberships." });
    }
  }

  export async function createNewMembership(req, res) {
    const { name, price, description } = req.body;
  
    if (!name || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const newMembership = new MembershipModel({
        name,
        price,
        description,
      });
  
      const savedMembership = await newMembership.save();
      res.status(201).json(savedMembership);  // Successfully created membership
    } catch (error) {
      console.error("Error creating membership:", error);
      res.status(500).json({ message: "Failed to create membership" });
    }
  }

  export async function deleteMembership(req, res) {
    const { id } = req.params;
  
    try {
      const deletedMembership = await MembershipModel.findByIdAndDelete(id);
      if (deletedMembership) {
        res.status(200).json({ message: "Membership deleted successfully" });
      } else {
        res.status(404).json({ message: "Membership not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting membership." });
    }
  }