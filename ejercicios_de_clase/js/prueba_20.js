function validar_nombre() {
    var nombre;
    nombre = document.getElementById("text_nombre");
    if (nombre.value != "") {
        alert("OK");
    } else {
        alert("Por favor complete el campo");
        nombre.focus()
    }
}

// EJERCICIO 2
function ocultar_mostrar() {
    var cambiar;
    cambiar = document.getElementById("p_ejercicio_2");
    if (cambiar.style.display == "") {
        cambiar.style.display = "none";
    } else {
        cambiar.style.display =""
    }
}

// Ejercicio 3
function cambiar_color() {
    var form;
    form = document.getElementById("form_ejercicio_3");
    var color;
    color = document.getElementById("input_color");

    form.style.backgroundColor = color.value
}

// Ejercicio 4
var clics = 0;
function funcion_contador() {
    var conteo;
    conteo = document.getElementById("p_conteo");

    clics = clics + 1;
    conteo.innerHTML = "Cantidad de clics: " + clics
}

// ejercicio 5

var fecha_hora;
fecha_hora = document.getElementById("p_fecha_hora");
fecha_hora.innerHTML = "La fecha y hora actual es: " + new Date().toLocaleString();

//ejercicio 6
function mostrar_nombre() {
    
}