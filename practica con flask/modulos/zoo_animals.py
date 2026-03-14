import json
import random

class zoo_animals:

    def __init__(self):
        self.file = "data/animales.json"

    def obtener_animal(self):
        try:
            with open(self.file, "r", encoding="utf-8") as f:
                animales = json.load(f)

            animal = random.choice(animales)

            return {
                "name": animal.get("name"),
                "animal_type": animal.get("animal_type"),
                "active_time": animal.get("active_time"),
                "lifespan": animal.get("lifespan"),
                "habitat": animal.get("habitat"),
                "diet": animal.get("diet"),
                "geo_range": animal.get("geo_range"),
                "image_link": animal.get("image_link")
            }

        except Exception as e:
            return {"error": f"Error al obtener el animal: {e}"}