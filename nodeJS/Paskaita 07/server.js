import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/carsRouter.js"

dotenv.config();

const { PORT, Mongo_URI } = process.env;

mongoose
.connect(Mongo_URI, {
    dbName: "demo07", // sukurs nauj1 duonbaze arpa prisijungs prie egzistuojancios
})
.then(() => console.log("connected to MongoDB"))
.catch((err) => console.log(err));

const app = express();

app.use(express.json());// virs router turi buti
app.use(router);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
