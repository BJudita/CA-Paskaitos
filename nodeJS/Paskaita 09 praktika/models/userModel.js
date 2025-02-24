import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Membership" }, // Reference to the Membership
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;