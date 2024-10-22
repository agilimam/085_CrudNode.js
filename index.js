import express from "express";
import bodyParser from "body-parser";
import MobilRoute from "./Routes/Mobil.js";
import MovieRoute from "./Routes/Movie.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/Movie",MovieRoute)
app.use("/Mobil", MobilRoute)
app.get("/", (req, res) => {
    console.log(['GET ROUTE']);
    res.send("Selamat Pagiiii");
});


app.listen(PORT, () => console.log(
    `Server berjalan di port: http://localhost:${PORT}`
));