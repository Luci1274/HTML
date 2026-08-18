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
    let parrafo = document.getElementById("mostrar_3");
    parrafo.style.backgroundColor = localStorage.getItem("color_elegido");
    if (color === "black" || color === "#000000") {
        parrafo.style.color = "white";
    } else {
        parrafo.style.color = "black";
    };
}

