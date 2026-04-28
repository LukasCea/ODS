const BASE_URL = 'http://localhost:3000/acciones';

export async function getAcciones() {
    const res = await fetch(BASE_URL);
    return await res.json();
}

export async function postAccion(nuevaAccion) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaAccion)
    });
    return await res.json();
}