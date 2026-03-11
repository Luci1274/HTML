import requests

class Imagenes_animales:
    def __init__(self):
        self.imagen_perro_url = "https://api.thedogapi.com/v1/images/search"
        self.imagen_gato_url = "https://api.thecatapi.com/v1/images/search"
    
    def obtener_imagen(self):
        try:
            response = requests.get(self.imagen_url, timeout=5)
            if response.status_code == 200:
                data = response.json()
                if data and len(data) > 0:
                    return data[0]['url']
            return None
        except requests.RequestException as e:
            print(f"Error al obtener imagen: {e}")
            return None

class The_dog_api(Imagenes_animales):
    def __init__(self):
        super().__init__()
        self.imagen_url = self.imagen_perro_url

class The_cat_api(Imagenes_animales):
    def __init__(self):
        super().__init__()
        self.imagen_url = self.imagen_gato_url