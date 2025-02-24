import ComputersModel from "./models/computers.js"

export async function createNewComputer(req, res) {
const { brand, price, model } = req.body;

try {
    const newComputer = new ComputersModel({
    brand,
    price,
    model,
});

const response = await newComputer.save(); //nusius i duomenu baze

res.json(response);
} catch (error) {
res.status(500).json({ message: "blogai"})
}
}

export async function getComputers(req, res) {
try {
const computers = await ComputersModel.find(); // paims visus compiuterius

res.json(computers);
} catch (error) {
    res.status(500).json({ message: "blogai"})
}
}
