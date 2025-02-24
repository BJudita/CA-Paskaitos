import mongoose from "mongoose";

const carSchema = new mongoose.Schema({//schemos k8rimas
  brand: String,
  model: String,
});

export default mongoose.model("cars", carSchema);