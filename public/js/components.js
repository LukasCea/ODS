// public/js/components.js
function loadHeader() {
    const header = document.querySelector('header'); // Busca la etiqueta <header> en tu HTML
    header.innerHTML = `
        <nav class="navbar">
            <a href="index.html">Inicio</a>
            <a href="pages/ODS1.html">ODS 1</a>
            <a href="pages/ODS2.html">ODS 2</a>
            <a href="pages/ODS3.html">ODS 3</a>
            <a href="pages/ODS4.html">ODS 4</a>
            <a href="pages/ODS5.html">ODS 5</a>
            <a href="pages/ODS6.html">ODS 6</a>
            <a href="pages/ODS7.html">ODS 7</a>
            <a href="pages/ODS8.html">ODS 8</a>
            <a href="pages/ODS9.html">ODS 9</a>
            <a href="pages/ODS10.html">ODS 10</a>
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