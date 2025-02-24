import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the frontend folder
app.use(express.static(path.join(process.cwd(), 'frontend')));

// Automobilių prekės ženklai
const carBrands = ["BMW", "VW", "Porsche"];

// Define the /cars endpoint
app.get('/cars', (req, res) => {
  res.json(carBrands);
});

// Start the server
app.listen(port, () => {
  console.log(`Serveris veikia adresu http://localhost:${port}`);
});