import express from "express";
import cors from "cors";
import router from "./routes/index.js"; //suimportuojame router

const PORT = 3000;
const app = express();

app.use(cors());

app.use(router); // naudok mano pakurta rauteri is kito failo

app.listen(PORT, () => console.log(`server running on port:${PORT}`));

