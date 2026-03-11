import requests

class ImagenesZorros:
    def __init__(self):
        self.url = "https://randomfox.ca/floof/"

    def obtener_imagen(self):
        try:
            response = requests.get(self.url, timeout=5)
            if response.status_code == 200:
                response.raise_for_status()
                data = response.json()
                return data['image']
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener la imagen: {e}")
            return None
