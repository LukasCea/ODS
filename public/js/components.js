// public/js/components.js
function loadHeader() {
    const header = document.querySelector('header'); // Busca la etiqueta <header> en tu HTML
    header.innerHTML = `
        <nav class="navbar">
            <a href="index.html">Inicio</a>
            <a href="pagina2.html">ODS 1</a>
            </nav>
    `;
}

function loadFooter() {
    const footer = document.querySelector('footer'); // Busca la etiqueta <footer> en tu HTML
    footer.innerHTML = `
        <p>&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>
    `;
}

// Se ejecuta automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});