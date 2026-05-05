export async function getDatos(seccion) {
    try {
        const response = await fetch(`/api/${seccion}`);
        if (!response.ok) throw new Error('Error en la petición');
        return await response.json();
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}