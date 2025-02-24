import express from "express";
import { helloWorldController } from "../controllers/index.js";  //../ pakilk vienu aplanku i virsu ir paima index is controller aplanko

const router = express.Router(); // sukuriam nauja rauteri, kinatamasis, atsakingas uz routus

router.get("/", helloWorldController); // iskvieciame funkcija ir index.js controller aplanke

export default router; // exportuojam routery
