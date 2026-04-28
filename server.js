const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(require('cors')());
app.use(express.static('public'));

const DB_PATH = 'data/db.json';

app.get('/acciones', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB_PATH));
    res.json(data);
});

app.post('/acciones', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DB_PATH));
    const nuevaAccion = req.body; 
    data.push(nuevaAccion);
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    res.status(201).json({ mensaje: "Acción guardada con éxito" });
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));