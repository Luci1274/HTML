var objVideojuegos;
objVideojuegos = {
    titulo: " ",
    edad_permitida: " ",
    generos: ["fantasia", "shooter", "medieval"]
};

function inyectar_datos() {
    let contJuegos;
    contJuegos = document.getElementById("contenedor_juego")
    for(let i = 0; i < objVideojuegos.generos.length; i++)
        contJuegos.innerHTML = objVideojuegos.generos[i];
};

function prueba_array() {
    let arrPrueba;
    arrPrueba = ["x","j","i","k","M"];
    alert(arrPrueba[1]);
};

var objUsuario;
objUsuario = {
    nombre: "luciano",
    apellido: "",
    madre: {
        nombre: "laura",
        apellido: "terrazzino"
    }
};

function obtener_persona() {
    alert(objUsuario.nombre);
};

// var saludo = function() {
//     return("hola mundo");
// }

// alert(saludo);

// alert(typeof saludo)

let myFuntion = function(){ }
let myStang = "Hola mundo";
let myNumer = 21;
let myDate = new Date();
function mostrar_typeof() {
    alert(typeof myFuntion);
    alert(typeof myStang);
    alert(typeof myNumer); 
    alert(typeof myDate);
}

let respuesta = prompt("Cual es tu nombre")

