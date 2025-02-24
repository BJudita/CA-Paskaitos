import UserModel from "../models/userModel.js";
import MembershipModel from "../models/membershipModel.js";


export async function getUsers(req, res) {
  const { order = 'name' } = req.params;  

  try {
    const users = await UserModel.find()
      .sort({ [order]: 1 })
      .populate('service_id');  
    res.json(users);
  } catch (error) {
    console.error("Error loading users:", error);
    res.status(500).json({ message: "Failed to load users." });
  }
}


export async function createNewUser(req, res) {
  const { name, surname, email, service_id } = req.body;

  try {
    // Check if the service_id exists in the Membership collection
    const membership = await MembershipModel.findById(service_id);
    if (!membership) {
      return res.status(400).json({ message: "Invalid membership ID." });
    }

    // Create and save the user
    const newUser = new UserModel({
      name,
      surname,
      email,
      service_id,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user." });
  }
}