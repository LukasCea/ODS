export function inicializarTema() {
    const btnTheme = document.getElementById('btn-theme-toggle');
    
    // 1. Si el usuario ya lo había cambiado a claro en otra página, lo mantenemos claro
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        if (btnTheme) btnTheme.textContent = '🌙 Modo Oscuro';
    }

    // 2. Listener para alternar el estado del DOM sin recargar la página
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                btnTheme.textContent = '🌙 Modo Oscuro'; // Ofrece volver al modo eficiente por defecto
            } else {
                localStorage.setItem('theme', 'dark');
                btnTheme.textContent = '☀️ Modo Claro';
            }
        });
    }
}