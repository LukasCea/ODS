import { getDatos } from "./api.js";

async function cargarPaginaExplicacionODS() {
    const datos = await getDatos('contenido_inicial');

    if (datos) {
        const infoPersonal = datos.find(item => item.id === 1);
        const contenedorPersonal = document.getElementById('descripcion-personal');

        if (contenedorPersonal && infoPersonal) {
            contenedorPersonal.innerHTML = `
            <img src="https://www.pixartprinting.it/blog/wp-content/uploads/2021/06/1_Mona_Lisa_300ppi.jpg" alt="Mona Lisa">
                <article>
                    <h2>Descripcion personal</h2>
                    <p>${infoPersonal.descripcion}</p>
                </article>
            `;
        }

        const objetivoPagina = datos.find(item => item.id === 2);
        const contenedorObjetivo = document.getElementById('objetivo-web');

        if (contenedorObjetivo && objetivoPagina) {
            contenedorObjetivo.innerHTML = `
                <article>
                    <h2>Objetivo de la pagina web</h2>
                    <p>${objetivoPagina.descripcion}</p>
                </article>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', cargarPaginaExplicacionODS);