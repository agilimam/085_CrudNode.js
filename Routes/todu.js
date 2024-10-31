import express, { Router } from "express";

const router = express.Router();

const todos = [
    {
        id: 1,
        task: "SATU",
        completed: false


    }
];


router.get('/', (req, res) => {
    res.json(todos);
});

// POST METHOD (MENAMBAHKAN DATA)
router.post('/', (req, res) => {
    const newTodu = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodu);
    res.status(201).json(newTodu)
});

// Delete Method (Menghapus data)
router.delete('/:id', (req, res) => {
    const toduIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (toduIndex === -1) return res.status(404).json({ message: 'Tugas Tidak Ditemukan' });

    const deletedtodos = todos.splice(toduIndex, 1)[0];
    res.status(200).json({ message: `Mobil '${deletedtodos.id}' telah dihapus` });
});

// PUT METHOD(UPDATE DATA)

router.put('/:id', (req, res) => {
    const todu = todos.find(t => t.id === parseInt(req.params.id));
    if (!todu) return res.status(404).json({ message: 'Tugas tidak ditemukan' });
    todu.task = req.body.task || todu.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todu.id} telah diperbarui`,
        updatedtodu: todu
    })
})


export default router