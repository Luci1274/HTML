// var contenedor;
// contenedor = document.getElementById("contenedor");

// var contenedor_2;
// contenedor_2 = document.getElementById("contenedor_2");

// function alguna_funcion() {
//     contenedor.innerText = " Algo ";
// }

// function otra_funcion() {
//     // contenedor_2.innerHTML = "<b>otra_funcion</b>";
//     contenedor_2.innerText = "<b>Otra funcion</b>";
// }

var nombre;
var apellido;
nombre = document.getElementById("txtNombre");
apellido = document.getElementById("txtApellido")

function validar() {
    if (nombre.value != "") {
        alert("ok")
    }
    else {
        alert("Completar campo nombre");
        nombre.focus();
        return false;
    }
    if (apellido.value != "") {
     alert("ok")
    }
    else {
        alert("Completar campo apellido");
        apellido.focus();
        return false;
    }
};

var genero;
genero = document.getElementById("selectGenero");
var profesion;
profesion = document.getElementById("pProfesion");

function fprofesion(){
    let opcionesHTML = ""
    if (genero.value == 1) {
        opcionesHTML = '<option value="">Selecciona profesión</option> <option value="actor">Actor</option> <option value="medico">Medico</option>';
        profesion.disabled = false
    } else if (genero.value === 2) {
        opcionesHTML = '<option value="">-- Selecciona profesión --</option> <option value="artista">Artista</option> <option value="docente">Docente</option>';
        profesion.disabled = false
    } else {
        opcionesHTML = '<opcion value="">Primero selecciones un género</opcion>'
        profesion.disabled = true
    };
    profesion.innerHTML = opcionesHTML
}