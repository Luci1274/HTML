import requests
from modulos.my_memory import MyMemoryTranslator

class RandomJoke:
    def __init__(self):
        self.api_url = "https://official-joke-api.appspot.com/random_joke"
        self.memory = MyMemoryTranslator()

    def get_joke(self):
        try:
            response = requests.get(self.api_url, timeout=5)
            if response.status_code == 200:
                joke_data = response.json()
                setup = joke_data.get("setup", "")
                punchline = joke_data.get("punchline", "")
                setup_traducido = self.memory.traducir_texto_mymemory(setup)
                punchline_traducido = self.memory.traducir_texto_mymemory(punchline)
                return {
                    "setup": setup,
                    "punchline": punchline,
                    "setup_traducido": setup_traducido,
                    "punchline_traducido": punchline_traducido
                } 
            else:
                return f"Error fetching joke: {response.status_code}"

        except requests.RequestException as e:
            return f"Error fetching joke: {e}"
        
