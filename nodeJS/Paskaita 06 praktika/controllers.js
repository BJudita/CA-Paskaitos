import CarsModel from "./models/cars.js";

export async function createNewCar(req, res) {
  const { brand, model } = req.body;

  try {
    const newCar = new CarsModel({
      brand,
      model,
    });

    const response = await newCar.save();

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "blogai" });
  }
}
