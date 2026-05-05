const express = require('express');
const fs = require('fs');
const path = require('path'); // Añadimos path para evitar errores de rutas
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(require('cors')());
app.use(express.static('public'));

// Usamos path.join para asegurarnos de que encuentre la carpeta data
const DB_PATH = path.join(__dirname, 'data', 'db.json');

app.get('/api/:seccion', (req, res) => {
    const seccion = req.params.seccion;
    console.log(`Petición recibida para la sección: ${seccion}`); // Esto saldrá en tu terminal

    try {
        if (!fs.existsSync(DB_PATH)) {
            return res.status(500).json({ mensaje: "Archivo db.json no encontrado" });
        }

        const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
        
        if (data[seccion]) {
            res.json(data[seccion]);
        } else {
            console.log(`Sección ${seccion} no existe en el JSON`);
            res.status(404).json({ mensaje: "Sección no encontrada" });
        }
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));