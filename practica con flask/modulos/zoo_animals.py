import requests

class zoo_animals:
    def __init__(self):
        self.url = "https://zoo-animals-api.p.rapidapi.com/animals/rand/10"
        self.headers = {
            "X-RapidAPI-Key": "11a689094emshc37250ab26d93bdp16b271jsn5b0aba8feb78",
            "X-RapidAPI-Host": "zoo-animals-api.p.rapidapi.com"
        }
    
    def obtener_animal(self):
        try:
            response = requests.get(self.url, headers=self.headers, timeout=5)
            if response.status_code == 200:
                response.raise_for_status()
                data = response.json()
                return {
                    "name": data.get("name"),
                    "animal_type": data.get("animal_type"),
                    "active_time": data.get("active_time"),
                    "lifespan": data.get("lifespan"),
                    "habitat": data.get("habitat"),
                    "diet": data.get("diet"),
                    "geo_range": data.get("geo_range"),
                    "image_link": data.get("image_link")
                }
            else:
                return {"error": f"Error al obtener el animal: {response.status_code}"}
        except requests.exceptions.RequestException as e:
            return {"error": f"Error al obtener el animal: {e}"}