const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const setupTraducido = document.getElementById("setup_traducido");
const punchlineTraducido = document.getElementById("punchline_traducido");

// ===== FUNCIÓN PARA OBTENER IMÁGENES y DATOS =====
// Hace fetch a la API de Flask y actualiza los datos

async function obtenerRandomJoke() {
    try {
        // Hacer la solicitud a la API
        const response = await fetch("/chistes/api/aleatorios/");
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();
        setup.textContent = datos.setup;
        punchline.textContent = datos.punchline;
        setupTraducido.textContent = datos.setup_traducido;
        punchlineTraducido.textContent = datos.punchline_traducido;
    } catch (error) {
        console.error('✗ Error al obtener información del animal:', error);
    }
}

// ===== LLAMADAS A LA FUNCIÓN =====
// Obtener información del animal al cargar la página
obtenerRandomJoke();

// Obtener nueva información del animal cada 10 segundos (10000 milisegundos)
setInterval(obtenerRandomJoke, 10000);