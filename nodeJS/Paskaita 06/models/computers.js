import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({//schemos k8rimas
  brand: String,
  model: String,
  price: Number,
});

export default mongoose.model("computers", computerSchema);
//modelio k8rimas, pavadinimas computers taps duomenu bazes aplanku