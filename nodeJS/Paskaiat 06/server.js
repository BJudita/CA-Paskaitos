import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI).
then(() => console.log(`Connected to mongoDB`))
.catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`server runs on port: ${PORT}`));
