from flask import Flask, render_template, request, jsonify
from modulos.imagenes_perros_gatos import The_dog_api, The_cat_api
from modulos.imagenes_zorros import ImagenesZorros
from modulos.zoo_animals import zoo_animals
from modulos.random_animal import random_animal

app = Flask(
    __name__,

)

"""Ruta principal"""
@app.route("/")
def index():
    return render_template("index.html")

"""Página de imagenes de perros y gatos"""
@app.route("/imagenes/perros_gatos")
def cat_page():
    return render_template("fotos_perros_gatos.html")

"""Index va a ser un about por ende no se llena con nada más"""


"""Inicializar the cat api"""
@app.route("/imagenes/api/perros_gatos/")
def fotos_perros_gatos():
    try:
        cat_api = The_cat_api()
        dog_api = The_dog_api()
        image_cat = cat_api.obtener_imagen()
        image_dog = dog_api.obtener_imagen()
        return jsonify({"image_cat": image_cat, "image_dog": image_dog})
    except Exception as e:
        return jsonify({"error": str(e)})

"""Página de imagenes de zorros"""
@app.route("/imagenes/zorros")
def fox_page():
    return render_template("fotos_zorros.html")

"""Inicializar the fox api"""
@app.route("/imagenes/api/zorros/")
def fotos_zorros():
    try:
        fox_api = ImagenesZorros()
        image_fox = fox_api.obtener_imagen()
        return jsonify({"image_fox": image_fox})
    except Exception as e:
        return jsonify({"error": str(e)})

"""Página de animales del zoo"""
@app.route("/animales/zoo")
def zoo_page():
    return render_template("zoo_animals.html")

"""Inicializar el api de animales del zoo"""
@app.route("/animales/api/zoo/")
def animales_zoo():
    try:
        zoo_api = zoo_animals()
        animal = zoo_api.obtener_animal()
        return jsonify(animal)
    except Exception as e:
        return jsonify({"error": str(e)})

"""Página de animales aleatorios"""
@app.route("/animales/aleatorios")
def random_animal_page():
    return render_template("random_animal.html")

"""Inicializar el api de animales aleatorios"""
@app.route("/animales/api/aleatorios/")
def animales_aleatorios():
    try:
        random_animal_api = random_animal()
        animal = random_animal_api.obtener_animal()
        return jsonify(animal)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)