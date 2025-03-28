import express from "express";
import router from "./routes/userRouter.js";

const port = 5000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`app listening port ${port}`));