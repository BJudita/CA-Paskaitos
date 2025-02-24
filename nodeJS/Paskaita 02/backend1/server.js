import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// call back, i6kviestas enpointas, jo f-ja. req-visa info apie atejusia info
app.get("/", (req, res) => { //res-responce 
// console.log(req);
// res.send("Labas"); //sius stringa labas
res.json({
    message: "siun2iame zinute json formatu", //sius response string1 ir iskart konvertuos  i string
}); 
});

app.get("/about", (req, res) => {
    res.json({
        about: "some information about",
        data: {
            stuff: 1,
            things: 12,
        }
    })
})

app.listen(3000, () => {
    console.log(`App is listening on PORT ${3000}`);
});