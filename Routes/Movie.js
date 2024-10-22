import express, { Router } from "express";

const router = express.Router();

const Movie = [
    {
        Judul: "To The Moon",
        Genre: "Adventure",
        Realesed: 2012,
        Status: "Tamat",
        Author: "Poinzi"

    },
    

    {
        Judul: "Mari Kerja",
        Genre: "Slice of life, Comedy",
        Realesed: 2022,
        Status: "Tamat",
        Author: "AuntiSari"
    }
];

router.get("/", (req, res) => {
    res.send(Movie);
});

export default router