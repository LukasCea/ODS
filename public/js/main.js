import { getAcciones, postAccion } from './api.js';

const formulario = document.querySelector('#miFormulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    if (nombre === "") return alert("El nombre es obligatorio");

    const datos = { nombre: nombre, fecha: new Date() };

    await postAccion(datos);
    alert("¡Acción guardada!");
    actualizarVista();
});