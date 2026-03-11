const animalImage = document.getElementById('zoo_animal_image');
const animalName = document.getElementById('zoo_animal_name');
const animalHabitat = document.getElementById('zoo_animal_habitat');
const animalDiet = document.getElementById('zoo_animal_diet');
const animalLifespan = document.getElementById('zoo_animal_lifespan');
const animalActiveTime = document.getElementById('zoo_animal_active_time');
const animalGeoRange = document.getElementById('zoo_animal_geo_range');
const animalType = document.getElementById('zoo_animal_type');

// ===== FUNCIÓN PARA OBTENER Datos =====
// Hace fetch a la API de Flask y actualiza los datos

async function obtenerZooAnimal() {
    try {
        // Hacer la solicitud a la API
        const response = await fetch("/animales/api/zoo/");
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Convertir respuesta a JSON
        const datos = await response.json();

        // Actualizar los elementos del DOM con los datos obtenidos
        animalImage.src = datos.image_link;
        animalName.textContent = datos.name;
        animalHabitat.textContent = datos.habitat;
        animalDiet.textContent = datos.diet;
        animalLifespan.textContent = datos.lifespan;
        animalActiveTime.textContent = datos.active_time;
        animalGeoRange.textContent = datos.geo_range;
        animalType.textContent = datos.animal_type;

        console.log('✓ Información del animal actualizada correctamente');
    } catch (error) {
        console.error('✗ Error al obtener información del animal:', error);
    }
}

// ===== LLAMADAS A LA FUNCIÓN =====
// Obtener información del animal al cargar la página
obtenerZooAnimal();

// Obtener nueva información del animal cada 15 segundos (15000 milisegundos)
setInterval(obtenerZooAnimal, 15000);