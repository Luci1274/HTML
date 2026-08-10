// // Windows alto y ancho de la ventana
// let x = window.innerWidth;
// let y = window.innerHeight;


// // windows.location Sirve como redirect
// window.location.href
// window.location.assign


// window.history.go

// window.cookieStore

// window.history.cookieStore
// window.load

localStorage.setItem("Pepa", "hola mundo"); 

sessionStorage

localStorage.getItem("Pepa");
localStorage.removeItem("Pepa");
localStorage.clear()

let item_1
let item_2

function guardar_info() {
    item_1 = localStorage.setItem("Juan", "garcia");
    item_2 = localStorage.setItem("Gabriela", "maca");
    localStorage.setItem("MAca", "REna");
};

function mostrar_info() {
    alert(localStorage.getItem("Juan"));
    alert(localStorage.getItem("Gabriela"));
}

function eliminar_info() {
    localStorage.removeItem("Juan");
}

function limpiar_info() {
    localStorage.clear();
    alert("TODO BORRADO");
}

// ASYNC 1-callback
function greet(name) {
    alert ("nombre: " + name);
};

function processAccess(callback) {
    var name = prompt("Ingrese un nombre");
    callback(name)
};

processAccess(greet);