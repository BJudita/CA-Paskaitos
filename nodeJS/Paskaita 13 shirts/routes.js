import express, { Router } from "express"
import { createNewShirt, getShirts, } from "./controllers.js";

const router = express.Router();
router.get("/",  (req, res)=> {
    res.json({ status: "Serveris funkcionuoja" });
  });
router.get("/shirts", getShirts)
router.get("/shirts/:size", getShirts)
router.post("/shirts", createNewShirt)
router.get("*", (req, res) => {
    res.status(404).json({ error: "Tokio puslapio nėra" });
  });
  

export default router;