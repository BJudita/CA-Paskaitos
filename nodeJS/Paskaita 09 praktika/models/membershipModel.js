import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const MembershipModel = mongoose.model("Membership", membershipSchema);

export default MembershipModel;