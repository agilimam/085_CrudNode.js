import express, { Router } from "express";

const router = express.Router();

const mobil = [
    {
        id: 1,
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: 2021,
    },

    {

        id: 2,
        merk: "Porshe",
        model: "Sport",
        warna: "Kuning",
        tahun: 2024,
    }
];

// router.get("/", (req, res) => {
//     res.send(mobil);
// });

router.get('/', (req, res) => {
    res.json(mobil);
});

// POST METHOD (MENAMBAHKAN DATA)
router.post('/', (req, res) => {
    const newMobil = {
        id: mobil.length + 1,
        merk: req.body.merk,
        model: req.body.model,
        warna: req.body.warna,
        tahun: req.body.tahun,
        completed: false
    };
    mobil.push(newMobil);
    res.status(201).json(newMobil)
});

// Delete Method (Menghapus data)
router.delete('/:id', (req, res) => {
    const MobilRoute = mobil.findIndex(t => t.id === parseInt(req.params.id));
    if (MobilRoute === -1) return res.status(404).json({ message: 'Tugas Tidak Ditemukan' });

    const deletedMobil = mobil.splice(MobilRoute, 1)[0];
    res.status(200).json({ message: `Mobil '${deletedMobil.id}' telah dihapus` });
});

// PUT METHOD(UPDATE DATA)

router.put('/:id', (req, res) => {
    const mobil = mobil.find(t => t.id === parseInt(req.params.id));
    if (!mobil) return res.status(404).json({ message: 'Tugas tidak Ditemukan' });
    mobil.merk = req.body.merk || mobil.merk;

    res.status(200).json({
        message: `Mobil dengan ID${mobil.id}telah Diperbarui`,
        updatedmobil: mobil
    });
});


export default router