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

    // --- FUNCIÓN PARA LEER Y RENDERIZAR LOS MIEMBROS EN PANTALLA ---
async function renderizarListaUsuarios() {
    // 1. Buscamos si ya existe el contenedor de la lista en la pantalla
    let contenedorLista = document.getElementById("seccion-lista-comunidad");
    
    // 2. Si no existe, lo creamos e insertamos estratégicamente ANTES del footer
    if (!contenedorLista) {
        const mainElement = document.querySelector("main");
        if (mainElement) {
            const cajaLista = document.createElement("section");
            cajaLista.id = "seccion-lista-comunidad";
            
            // Forzamos comportamiento de bloque y espaciados externos neutros
            cajaLista.style.width = "100%";
            cajaLista.style.display = "block";
            cajaLista.style.marginTop = "40px";
            cajaLista.style.padding = "0 15px";
            cajaLista.style.boxSizing = "border-box";
            
            cajaLista.innerHTML = `
                <div class="tarjeta-comunidad-wrapper">
                    <h2 class="titulo-seccion" style="width: 100%; display: block; margin-top: 0; margin-bottom: 10px;">🌱 Comunidad Eco-Tech Activa</h2>
                    
                    <p class="descripcion-seccion" style="width: 100%; display: block; margin-bottom: 25px;">
                        Datos en tiempo real de los miembros que colaboran con la Gobernanza y la Economía Circular (ASG):
                    </p>
                    
                    <div class="tabla-contenedor" style="width: 100%;">
                        <table class="tabla-usuarios" style="width: 100%; table-layout: auto; border-collapse: collapse;">
                            <thead>
                                <tr>
                                    <th>👤 Miembro</th>
                                    <th>📧 Correo Electrónico</th>
                                    <th>♻️ Acción Circular</th>
                                    <th>📦 Elemento</th>
                                </tr>
                            </thead>
                            <tbody id="lista-miembros-comunidad-body">
                                </tbody>
                        </table>
                    </div>
                </div>
            `;
            
            mainElement.appendChild(cajaLista);
        }
    }

    // 3. Obtenemos el cuerpo de la tabla para rellenarlo con los datos del servidor
    const tablaBody = document.getElementById("lista-miembros-comunidad-body");
    if (!tablaBody) return;

    try {
        const respuesta = await fetch("/api/usuarios");
        const usuarios = await respuesta.json();

        if (usuarios.length === 0) {
            tablaBody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; padding: 25px;" class="texto-vacio">
                        Aún no hay miembros registrados en esta simulación. ¡Sé el primero!
                    </td>
                </tr>`;
            return;
        }

        // Mapeamos los usuarios e inyectamos filas estructuradas de tabla (<tr>)
        tablaBody.innerHTML = usuarios.map(u => `
            <tr>
                <td data-label="Miembro" class="celda-nombre">${u.nombre}</td>
                <td data-label="Correo">${u.email}</td>
                <td data-label="Acción">${u.accionCircular || 'Colaboración Sostenible'}</td>
                <td data-label="Elemento"><code>${u.elemento || 'Herramienta'}</code></td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("Error al renderizar la lista de usuarios:", error);
        tablaBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: #ef4444; padding: 25px;">
                    ❌ Error al conectar con el servidor. Por favor, inicia el json-server.
                </td>
            </tr>`;
    }
}

    // --- FUNCIÓN INTERNA COMPARTIDA PARA HACER EL REGISTRO ---
    async function procesarRegistro(nombre, email, accionCircular, elemento) {
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
            const nuevoUsuario = { 
                nombre, 
                email, 
                accionCircular, 
                elemento 
            };

            const respuestaPost = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoUsuario)
            });

            if (respuestaPost.ok) {
                alert(`¡Cuenta Eco-Tech creada con éxito!\nHas registrado un/a [${elemento}] para el programa de ${accionCircular}. Bienvenido/a, ${nombre}.`);
                localStorage.setItem("usuarioSesion", JSON.stringify(nuevoUsuario));
                verificarSesionActiva();
                // Actualizamos la lista en pantalla inmediatamente tras registrarse
                await renderizarListaUsuarios();
            }
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            alert("Error de conexión. Asegúrate de que el servidor Node.js esté encendido.");
        }
    }

    // --- ESCUCHA DE EVENTOS ---

    // Evento para el formulario de la Página 09 (Incrustado)
    if (formRegistroPagina09) {
        formRegistroPagina09.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nombre = document.getElementById("reg-nombre").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            
            // Captura select e input circular o asigna por defecto
            const accionCircular = document.getElementById("reg-tipo-accion") ? document.getElementById("reg-tipo-accion").value : "Donar/Compartir Herramienta";
            const elemento = document.getElementById("reg-elemento") ? document.getElementById("reg-elemento").value.trim() : "Herramienta Comunal";
            
            await procesarRegistro(nombre, email, accionCircular, elemento);
        });
    }

    // Si no existen los elementos del modal (Página 10), detenemos aquí el resto de eventos de forma segura
    if (!btnAbrir || !modal) {
        verificarSesionActiva();
        renderizarListaUsuarios(); // Cargamos la lista de todos modos
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

    // Evento para el formulario de registro del Modal (Página 10)
    if (formRegistroModal) {
        formRegistroModal.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nombre = document.getElementById("reg-nombre").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            
            const accionCircular = document.getElementById("reg-tipo-accion") ? document.getElementById("reg-tipo-accion").value : "Donar/Compartir Herramienta";
            const elemento = document.getElementById("reg-elemento") ? document.getElementById("reg-elemento").value.trim() : "Herramienta Comunal";
            
            await procesarRegistro(nombre, email, accionCircular, elemento);
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
            
            if (formRegistroPagina09) {
                formRegistroPagina09.parentElement.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <h3>✅ ¡Ya eres miembro activo, ${usuario.nombre}!</h3>
                        <p style="color: var(--texto-secundario);">Gracias por aportar tu <strong>${usuario.elemento || 'dispositivo'}</strong> al programa de <strong>${usuario.accionCircular || 'Sostenibilidad'}</strong>.</p>
                    </div>`;
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
    
    // Al cargar la función por primera vez, verificamos sesión y pintamos la lista existente
    verificarSesionActiva();
    renderizarListaUsuarios();
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
