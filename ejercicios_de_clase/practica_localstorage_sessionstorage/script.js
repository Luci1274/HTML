function guardar_nombre_ls() {
    let nombre_usuario = document.getElementById("guardar_nombre_local").value;
    let parrafo = document.getElementById("mostrar_1");
    localStorage.setItem("usuario",nombre_usuario);
    parrafo.innerHTML = "El nombre de usuario es: " + localStorage.getItem("usuario");
};

function contar_visitas(){
    let parrafo = document.getElementById("mostrar_2");
    let ingresos = Number(localStorage.getItem("ingreso")) || 0;
    ingresos += 1;
    localStorage.setItem("ingreso", ingresos)
    parrafo.innerHTML = "Cantidad de veces ingresadas: " + localStorage.getItem("ingreso");
};

function guardar_color_ls() {
    let color = document.getElementById("color_elegido").value;
    localStorage.setItem("color_elegido", color);
    let contenedor = document.getElementById("ejecicio_4");
    contenedor.style.backgroundColor = localStorage.getItem("color_elegido");
    if (color === "black" || color === "#000000") {
        contenedor.style.color = "white";
    } else {
        contenedor.style.color = "black";
    };
};
function aplicar_color_iniciar() {
    let color = document.getElementById("color_elegido");
    color.value = localStorage.getItem("color_elegido");
    let contenedor = document.getElementById("ejecicio_4");
    contenedor.style.backgroundColor = localStorage.getItem("color_elegido");
    if (color === "black" || color === "#000000") {
        contenedor.style.color = "white";
    } else {
        contenedor.style.color = "black";
    };
};

function guardar_listado() {
    let item = document.getElementById("listado").value;
    let listado = JSON.parse(localStorage.getItem("listado")) || [];
    listado.push(item);
    localStorage.setItem("listado", JSON.stringify(listado));
    item.value = "";
    mostrar_listado();
};

function mostrar_listado() {
    let parrafo = document.getElementById("mostrar_4");
    let listado = JSON.parse(localStorage.getItem("listado")) || [];
    let contenidoHTML = "<p><b>Lista de items:</b></p><ul>";
    for (let i = 0; i < listado.length; i++) {
        contenidoHTML += `<li>${listado[i]}</li>`;
    }
    contenidoHTML += "</ul>";
    parrafo.innerHTML = contenidoHTML;
};

function temporizador() {
    let tiempo_inicial = 100;
    let segundos = parseInt(sessionStorage.getItem("tiempo_restante")) || tiempo_inicial;
    parrafo = document.getElementById("mostrar_5")
    const temporizador = setInterval(() => {
       parrafo.innerHTML = "Tiempo restante: " + segundos; 
        segundos--;
        
        sessionStorage.setItem("tiempo_restante", segundos);

        if (segundos <= 0) {
            clearInterval(temporizador);
            sessionStorage.removeItem("tiemo_restante");
            parrafo.innerHTML = "Tiempo terminado";
        }
    }, 1000);
}

function guardar_notas() {
    let alumno = document.getElementById("alumno").value;
    let materia = document.getElementById("materia").value
    let nota = document.getElementById("nota").value;

    listados = JSON.parse(localStorage.getItem("alumnos")) || [];
    listados.push({Alumno: alumno, Materia: materia, Nota: nota})

    localStorage.setItem("alumnos", JSON.stringify(listados));

    mostrar_notas();
}

function mostrar_notas() {
    let parrafo = document.getElementById("mostrar_6");
    let listados = JSON.parse(localStorage.getItem("alumnos")) || [];
    let contenidoHTML = "<p><b>Lista de notas:</b></p><ul>";

    for (let i = 0; i < listados.length; i++) {
        contenidoHTML += `<li>Alumno: ${listados[i].Alumno} - Materia: ${listados[i].Materia} - Nota: ${listados[i].Nota}</li>`;
    }
    contenidoHTML += "</ul>";
    parrafo.innerHTML = contenidoHTML;    
}