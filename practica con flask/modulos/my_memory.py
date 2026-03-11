import requests

class MyMemoryTranslator:
    def __init__(self):
        self.url = url = "https://api.mymemory.translated.net/get"
        
    def traducir_texto_mymemory(self, texto, origen="en", destino="es"):
        """
        Traduce un texto de un idioma a otro utilizando la API MyMemory.

        Args:
            texto (str): El texto a traducir.
            origen (str): Idioma de origen (por defecto 'en' para inglés).
            destino (str): Idioma de destino (por defecto 'es' para español).

        Returns:
            str: El texto traducido.

        Raises:
            RuntimeError: Si falla la traducción.
        """
        # URL de la API de traducción MyMemory
        url = "https://api.mymemory.translated.net/get"

        # Parámetros para la solicitud: texto, par de idiomas
        params = {"q": texto, "langpair": f"{origen}|{destino}"}

        # Hacer la solicitud GET con los parámetros
        response = requests.get(url, params=params)

        # Verificar si la respuesta es exitosa
        if response.status_code == 200:
            # Convertir respuesta JSON
            data = response.json()

            # Extraer el texto traducido del diccionario de respuesta
            translated = data.get("responseData", {}).get("translatedText", "")

            # Si no hay traducción, devolver un mensaje de error
            if not translated:
                raise RuntimeError("No se pudo obtener la traducción")

            return translated
        else:
            # Lanzar excepción si hay error HTTP
            raise RuntimeError(f"Error en la traducción: {response.status_code}")
        

