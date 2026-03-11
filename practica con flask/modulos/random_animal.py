import requests
from modulos.my_memory import MyMemoryTranslator
import random

class random_animal:
    def __init__(self):
        self.urls = [
            "https://some-random-api.com/animal/fox",
            "https://some-random-api.com/animal/panda",
            "https://some-random-api.com/animal/birb",
            "https://some-random-api.com/animal/koala",
            "https://some-random-api.com/animal/cat",
            "https://some-random-api.com/animal/red_panda",
            "https://some-random-api.com/animal/raccoon",
            "https://some-random-api.com/animal/kangaroo",
            "https://some-random-api.com/animal/whale",
            "https://some-random-api.com/animal/dog"
        ]
        
    def obtener_animal(self):
        try:
            self.url = random.choice(self.urls)
            response = requests.get(self.url, timeout=5)
            if response.status_code == 200:
                data = response.json()
                data["translated"] = self.traducrir_animal(data)
                return {
                    "image" : data.get("image"),
                    "fact" : data.get("fact"),
                    "translated_fact": data["translated"].get("fact")
                }

            else:
                return {"error": f"Error al obtener animal: {response.status_code}"}
        except requests.RequestException as e:
            return {"error": f"Error al obtener animal: {e}"}
        
    def traducrir_animal(self, animal_info):
        try:
            translator = MyMemoryTranslator()
            translated_info = {}
            for key, value in animal_info.items():
                if isinstance(value, str):
                    translated_info[key] = translator.traducir_texto_mymemory(value)
                else:
                    translated_info[key] = value
            return translated_info
        except Exception as e:
            return {"error": f"Error al traducir animal: {e}"}

