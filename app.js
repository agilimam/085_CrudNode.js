import express from "express";
import bodyParser from "body-parser";
import ToduRoute from "./Routes/todu.js";


const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use(express.json());
app.set('view engine', 'ejs');

app.use("/todu", ToduRoute)

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(
    `Server berjalan di port: http://localhost:${PORT}`
));