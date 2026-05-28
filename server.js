const express = require('express');
const fs = require('fs');
const path = require('path'); 
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(require('cors')());
app.use(express.static('public'));

// Ruta hacia tu base de datos
const DB_PATH = path.join(__dirname, 'data', 'db.json');

// 1. RUTA GET: Para leer secciones (Ya la tenías y funciona genial)
app.get('/api/:seccion', (req, res) => {
    const seccion = req.params.seccion;
    console.log(`Petición GET recibida para la sección: ${seccion}`);

    try {
        if (!fs.existsSync(DB_PATH)) {
            return res.status(500).json({ mensaje: "Archivo db.json no encontrado" });
        }

        const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
        
        if (data[seccion]) {
            res.json(data[seccion]);
        } else {
            res.status(404).json({ mensaje: "Sección no encontrada" });
        }
    } catch (error) {
        console.error("Error en el servidor GET:", error);
        res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});

// 2. RUTA POST NUEVA: Para registrar nuevos usuarios de forma segura
app.post('/api/usuarios', (req, res) => {
    console.log("Petición POST recibida en /api/usuarios con los datos:", req.body);
    
    const { nombre, email } = req.body;

    if (!nombre || !email) {
        return res.status(400).json({ mensaje: "Faltan campos obligatorios (nombre o email)" });
    }

    try {
        if (!fs.existsSync(DB_PATH)) {
            return res.status(500).json({ mensaje: "Base de datos db.json no encontrada" });
        }

        // Leemos el archivo actual
        const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));

        // Si por algún motivo no existe el array de usuarios, lo creamos
        if (!data.usuarios) {
            data.usuarios = [];
        }

        // Validamos si el email ya existe en db.json
        const usuarioExiste = data.usuarios.find(u => u.email === email);
        if (usuarioExiste) {
            return res.status(400).json({ mensaje: "Este correo electrónico ya está registrado." });
        }

        // Creamos el nuevo objeto de usuario
        const nuevoUsuario = { id: Date.now(), nombre, email };
        
        // Lo añadimos al array de la base de datos
        data.usuarios.push(nuevoUsuario);

        // Guardamos los cambios físicamente en el archivo db.json
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');

        console.log(`¡Usuario ${nombre} registrado con éxito!`);
        res.status(201).json(nuevoUsuario);

    } catch (error) {
        console.error("Error al guardar el usuario en el servidor:", error);
        res.status(500).json({ mensaje: "Error interno al procesar el registro" });
    }
});

app.listen(PORT, () => console.log(`Servidor Express corriendo en http://localhost:${PORT}`));