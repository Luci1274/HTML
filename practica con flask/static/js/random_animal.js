const animalImage = document.getElementById("animal-image");
const animalFact = document.getElementById("animal-fact");
const animalFactTraducido = document.getElementById("animal-fact-traducido");

// ===== FUNCIÓN PARA OBTENER IMÁGENES y DATOS =====
// Hace fetch a la API de Flask y actualiza los datos

async function obtenerRandomAnimal() {
    try {
        // Hacer la solicitud a la API
        const response = await fetch("/animales/api/aleatorios/");
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();
        animalImage.src = datos.image;
        animalFact.textContent = datos.fact;
        animalFactTraducido.textContent = datos.translated_fact;
    } catch (error) {
        console.error('✗ Error al obtener información del animal:', error);
    }
}

// ===== LLAMADAS A LA FUNCIÓN =====
// Obtener información del animal al cargar la página
obtenerRandomAnimal();

// Obtener nueva información del animal cada 1 minuto (100000 milisegundos)
setInterval(obtenerRandomAnimal, 100000);