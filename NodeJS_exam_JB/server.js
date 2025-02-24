import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/index.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI, {dbName: "Atsiskaitymas_JB" })
.then(() => console.log("Connected to  mongoDB"))
.catch((err) => log(err));

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));