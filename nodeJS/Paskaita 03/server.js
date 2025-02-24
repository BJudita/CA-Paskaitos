import express from "express";
import router from "./routes/userRouter.js";

const port = 3000;

const app = express();
app.use(express.json()); // ateis request ir per requiest pereis sitas. kad nodejs suprastu kas yra json
app.use(router); // prisideti router prie aplikacijos

app.listen(port, () => console.log(`app listening port ${port}`)); // aplikacija lauks uzklausu