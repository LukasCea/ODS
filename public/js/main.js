import { getDatos } from "./api.js";
import { inicializarTema } from "./temas.js";

async function cargarPaginaInicial() {
    const datos = await getDatos('contenido_inicial');
    if(!datos) return;

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

async function cargarPaginaExplicacionODS() {
    const datos = await getDatos('explicacionODS');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-explicacion');
        
        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('explicacion-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('explicacion-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaProblemas() {
    const datos = await getDatos('problemasODS');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-problemas');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('problemas-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('problemas-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaSostenibilidad() {
    const datos = await getDatos('practicasSostenibles');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-sostenibilidad');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('sostenibilidad-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('sostenibilidad-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaEficiente() {
    const datos = await getDatos('programacionEficiente');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-eficiencia');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('eficiencia-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('eficiencia-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaEmpresa() {
    const datos = await getDatos('analisisEmpresa');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-empresa');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('empresa-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('empresa-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaInventario() {
    const datos = await getDatos('herramientasEficienciaEnergetica');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-inventario');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('inventario-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('inventario-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaHerramientas() {
    const datos = await getDatos('herramientasDonar');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-herramientas');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('herramientas-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('herramientas-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

function router() {
    inicializarTema();
    const path = window.location.pathname;

    if (path.includes("index.html") || path === "/") {
        cargarPaginaInicial();
    } else if (path.includes("01-explicacionODS.html")) {
        cargarPaginaExplicacionODS();
    } else if (path.includes("02-problemasODS.html")) {
        cargarPaginaProblemas();
    } else if (path.includes("03-practicasSostenibles.html")) {
        cargarPaginaSostenibilidad();
    } else if (path.includes("04-programacionEficiente.html")) {
        cargarPaginaEficiente();
    } else if (path.includes("05-analisisEmpresa.html")) {
        cargarPaginaEmpresa();
    } else if (path.includes("06-ODS6.html")) {
        cargarPaginaODS6();
    } else if (path.includes("07-ODS7.html")) {
        cargarPaginaODS7();
    } else if (path.includes("08-ODS8.html")) {
        cargarPaginaODS8();
    } else if (path.includes("09-inventarioEnergeticos.html")) {
        cargarPaginaInventario();
    } else if (path.includes("10-herramientasDonar.html")) {
        cargarPaginaHerramientas();
    }

}

document.addEventListener('DOMContentLoaded', router);
