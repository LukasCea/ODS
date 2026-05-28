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
            <img src="img/lukas.png" alt="Lukas Cea Sandoval">
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

async function cargarPaginaExplicacionODS(nodo = 'explicacionODS') {
    const datos = await getDatos(nodo);
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

async function cargarPaginaSostenibilidad(nodo = 'practicasSostenibles') {
    const datos = await getDatos(nodo);
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

async function cargarPaginaAgenda() {
    const datos = await getDatos('agendaEventos');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-agenda');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('agenda-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('agenda-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaEstadisticas() {
    const datos = await getDatos('estadisticasMundo');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-estadisticas');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('estadisticas-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('estadisticas-ODS15');

        if (contenedorODS15 && ODS15) {
            contenedorODS15.innerHTML = `
                <h2>${ODS15.titulo}</h2>
                <p>${ODS15.descripcion}</p>
            `;
        }
    }
}

async function cargarPaginaConsejos() {
    const datos = await getDatos('consejosTech');
    if(!datos) return;

    if (datos) {
        const titulo = datos.find(item => item.id === 1);
        const contenedorTitulo = document.getElementById('titulo-consejos');

        if (contenedorTitulo && titulo) {
            contenedorTitulo.innerHTML = `
                <h1>${titulo.descripcion}</h1>
            `;
        }

        const ODS7 = datos.find(item => item.id === 2);
        const contenedorODS7 = document.getElementById('consejos-ODS7');

        if (contenedorODS7 && ODS7) {
            contenedorODS7.innerHTML = `
                <h2>${ODS7.titulo}</h2>
                <p>${ODS7.descripcion}</p>
            `;
        }

        const ODS15 = datos.find(item => item.id === 3);
        const contenedorODS15 = document.getElementById('consejos-ODS15');

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

async function cargarPaginaHerramientasDonar(nodo = 'herramientasDonar') {
    const datos = await getDatos(nodo);
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

// =======================================================
// LÓGICA COMPLETA DE AUTENTICACIÓN Y REGISTRO (POST)
// =======================================================

function inicializarZonaMiembros() {
    // 1. Buscamos los elementos del modal (Página 10)
    const btnAbrir = document.getElementById("btn-abrir-miembros");
    const modal = document.getElementById("modal-miembros");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    
    const tabLogin = document.getElementById("tab-login");
    const tabRegistro = document.getElementById("tab-registro");
    
    const formLogin = document.getElementById("form-login");
    const formRegistroModal = document.getElementById("form-registro");
    const infoLogeado = document.getElementById("usuario-logeado-info");
    const saludoUsuario = document.getElementById("saludo-usuario");
    const btnLogout = document.getElementById("btn-logout");

    // 2. Buscamos el formulario incrustado (Página 09)
    const formRegistroPagina09 = document.getElementById("form-registro-miembro");

    const API_URL = "/api/usuarios";

    // --- FUNCIÓN INTERNA COMPARTIDA PARA HACER EL REGISTRO ---
    async function procesarRegistro(nombre, email) {
        try {
            // Verificar si ya existe el correo
            const respuestaVerificar = await fetch(API_URL);
            const usuariosExistentes = await respuestaVerificar.json();
            
            const existe = usuariosExistentes.find(u => u.email === email);
            if (existe) {
                alert("Este correo electrónico ya está registrado.");
                return;
            }

            // Hacer el POST a db.json
            const nuevoUsuario = { nombre, email };
            const respuestaPost = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoUsuario)
            });

            if (respuestaPost.ok) {
                alert(`¡Cuenta Eco-Tech creada con éxito! Bienvenido/a, ${nombre}.`);
                localStorage.setItem("usuarioSesion", JSON.stringify(nuevoUsuario));
                verificarSesionActiva();
            }
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            alert("Error de conexión. Asegúrate de que json-server esté encendido.");
        }
    }

    // --- ESCUCHA DE EVENTOS ---

    // Evento para el formulario de la Página 09 (Incrustado)
    if (formRegistroPagina09) {
        formRegistroPagina09.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nombre = document.getElementById("reg-nombre").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            await procesarRegistro(nombre, email);
        });
    }

    // Si no existen los elementos del modal (Página 10), detenemos aquí el resto de eventos de forma segura
    if (!btnAbrir || !modal) {
        verificarSesionActiva();
        return;
    }

    // Eventos del Modal (Página 10)
    btnAbrir.addEventListener("click", () => {
        modal.classList.add("mostrar");
        verificarSesionActiva();
    });

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            modal.classList.remove("mostrar");
        });
    }

    if (tabLogin && tabRegistro && formLogin && formRegistroModal) {
        tabLogin.addEventListener("click", () => {
            tabLogin.classList.add("tab-activa");
            tabRegistro.classList.remove("tab-activa");
            formLogin.classList.remove("form-oculto");
            formRegistroModal.classList.add("form-oculto");
        });

        tabRegistro.addEventListener("click", () => {
            tabRegistro.classList.add("tab-activa");
            tabLogin.classList.remove("tab-activa");
            formRegistroModal.classList.remove("form-oculto");
            formLogin.classList.add("form-oculto");
        });
    }

    if (formRegistroModal) {
        formRegistroModal.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nombre = document.getElementById("reg-nombre").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            await procesarRegistro(nombre, email);
        });
    }

    if (formLogin) {
        formLogin.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim();

            try {
                const respuesta = await fetch(API_URL);
                const usuarios = await respuesta.json();
                const usuarioValido = usuarios.find(u => u.email === email);

                if (usuarioValido) {
                    alert(`¡Bienvenido de nuevo, ${usuarioValido.nombre}!`);
                    localStorage.setItem("usuarioSesion", JSON.stringify(usuarioValido));
                    verificarSesionActiva();
                } else {
                    alert("El correo electrónico no se encuentra registrado.");
                }
            } catch (error) {
                console.error("Error en el inicio de sesión:", error);
            }
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("usuarioSesion");
            alert("Sesión finalizada de forma segura.");
            verificarSesionActiva();
        });
    }

    // 6. COMPROBACIÓN RECURRENTE DE ESTADO
    function verificarSesionActiva() {
        const sesionGuardada = localStorage.getItem("usuarioSesion");

        if (sesionGuardada) {
            const usuario = JSON.parse(sesionGuardada);
            if (formLogin) formLogin.classList.add("form-oculto");
            if (formRegistroModal) formRegistroModal.classList.add("form-oculto");
            if (tabLogin) tabLogin.classList.add("form-oculto");
            if (tabRegistro) tabRegistro.classList.add("form-oculto");
            
            if (infoLogeado) infoLogeado.classList.remove("form-oculto");
            if (saludoUsuario) saludoUsuario.textContent = `👋 ¡Hola de nuevo, ${usuario.nombre}!`;
            if (btnAbrir) btnAbrir.textContent = `👤 Miembro: ${usuario.nombre}`;
            
            // Si estamos en la página 9, podemos ocultar el formulario incrustado al estar logeado
            if (formRegistroPagina09) {
                formRegistroPagina09.parentElement.innerHTML = `<h3>✅ Ya eres miembro activo: ${usuario.nombre}</h3>`;
            }
        } else {
            if (tabLogin) tabLogin.classList.remove("form-oculto");
            if (tabRegistro) tabRegistro.classList.remove("form-oculto");
            if (infoLogeado) infoLogeado.classList.add("form-oculto");
            
            if (tabLogin) tabLogin.click();
            if (btnAbrir) btnAbrir.textContent = "👤 Zona Miembros";
            if (formLogin) formLogin.reset();
            if (formRegistroModal) formRegistroModal.reset();
        }
    }
    
    verificarSesionActiva();
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
    } else if (path.includes("06-agendaEventos.html")) {
        cargarPaginaAgenda("agendaEventos");
    } else if (path.includes("07-estadisticasMundo.html")) {
        cargarPaginaEstadisticas("estadisticasMundo");
    } else if (path.includes("08-consejosTech.html")) {
        cargarPaginaConsejos("consejosTech");
    } else if (path.includes("09-inventarioEnergeticos.html")) {
        // Ajustado para que cargue tu página 09 usando la función de herramientasDonar o la que desees
        cargarPaginaInventario("herramientasEficienciaEnergetica");
    } else if (path.includes("10-herramientasDonar.html")) {
        cargarPaginaHerramientasDonar("herramientasDonar");
    }

    // Activamos de forma segura la escucha del modal flotante
    inicializarZonaMiembros();
}


window.addEventListener("DOMContentLoaded", () => {
    router();
});
