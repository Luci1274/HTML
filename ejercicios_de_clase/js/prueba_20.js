function validar_nombre() {
    var nombre;
    nombre = document.getElementById("text_nombre");
    if (nombre.value != "") {
        alert("OK");
    } else {
        alert("Por favor complete el campo");
        nombre.focus()
    }
};

// EJERCICIO 2
function ocultar_mostrar() {
    var cambiar;
    cambiar = document.getElementById("p_ejercicio_2");
    if (cambiar.style.display == "") {
        cambiar.style.display = "none";
    } else {
        cambiar.style.display =""
    }
};

// Ejercicio 3
function cambiar_color() {
    var form;
    form = document.getElementById("form_ejercicio_3");
    var color;
    color = document.getElementById("input_color");

    form.style.backgroundColor = color.value
};

// Ejercicio 4
var clics = 0;
function funcion_contador() {
    var conteo;
    conteo = document.getElementById("p_conteo");

    clics = clics + 1;
    conteo.innerHTML = "Cantidad de clics: " + clics
};

// ejercicio 5

var fecha_hora;
fecha_hora = document.getElementById("p_fecha_hora");
fecha_hora.innerHTML = "La fecha y hora actual es: " + new Date().toLocaleString();

//ejercicio 6
function mostrar_nombre() {
    let txt_nombre;
    txt_nombre = document.getElementById("nombre_usuario_6");
    let nuevo_valor;
    nuevo_valor = document.getElementById("parrafo_cambiar");
    nuevo_valor.innerHTML = txt_nombre.value;
    
};

// ejercicio 7
function bienvenida() {
    let txt_nombre;
    txt_nombre = document.getElementById("nombre_usuario_7");
    let bienvenida;
    bienvenida = document.getElementById("parrafo_bienvenida");
    bienvenida.innerHTML = "Bienvenido"+ " " + txt_nombre.value
};

// ejercicio 8
function validar_email() {
    let email;
    email = document.getElementById("email_usuario_8");
    let mensaje;
    mensaje = document.getElementById("mensaje_8");
    const valor = email.value;
    const patron = /^[^s@]+@[^s@]+\.[^s@]+$/;

    if (patron.test(valor)) {
        mensaje.textContent = "El correo es valido";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "El correo es invalido";
        mensaje.style.color = "red";
    }
};

// ejercicio 9
function cambiar_tamaño() {
    let parrafo;
    parrafo = document.getElementById("parrafo_tamaño");
    parrafo.style.fontSize = "20px"    
};

// ejercicio 10
function mostrar_longuitud() {
    let text = document.getElementById("longuitud_texto");
    let loguitud = text.value.length;
    let parrafo = document.getElementById("parrafo_loguitud");
    parrafo.textContent = "La longuitud de su palabra es: " + loguitud
};