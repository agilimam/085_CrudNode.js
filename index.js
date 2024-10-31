import express from "express";
import bodyParser from "body-parser";
import MobilRoute from "./Routes/Mobil.js";
import MovieRoute from "./Routes/Movie.js";

const app = express();
const PORT = 8000;


app.use(bodyParser.json());

app.use(express.json());

app.set('view engine', 'ejs');

app.use("/Movie", MovieRoute)

app.use("/Mobil", MobilRoute)

app.get("/", (req, res) => {
    res.render('index');
});


app.listen(PORT, () => console.log(
    `Server berjalan di port: http://localhost:${PORT}`
));