import express from "express";
import cors from "cors";
import { getUsers, addUser } from "./frontend/script.js";

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("frontend")); 

//routai
app.get("/user", getUsers);
app.post("/user", addUser);


app.listen(port, () => console.log(`app listening port ${port}`));


