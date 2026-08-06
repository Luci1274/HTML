// for ((declarar variable); (condicion); (aumento o decremento)) {

// }

// for (let i = 0; i <= 10; i++) {
//     alert(i);
// }

// var frutas = ["manzana", "banana", "cereza", "durazno"];
// for (let i = 0; i < frutas.length; i++) {
//     alert(frutas[i]);
// }

// frutas.forEach(element => {

// });

// while (condicion) {}; así funciona un while

// let i = 0
// while (i < frutas.length) {
//     alert(frutas[i]);
    
//     if (frutas[i] === "cereza") {
//         break;
//     }

//     i++;
// }

// practica de DOM

// let titulo = document.querySelector("h1");
let titulo = document.getElementsByTagName("h1")[0];
titulo.innerText = "interaciones, DOM";

document.getElementsByTagName("li")[0].innerText = "Elemento 1 desde JS";

let textos = document.getElementById("texto");
textos.innerHTML = "<p>Lorem</p><b>Lorem ipsum</b>";

let items = document.querySelectorAll("ul li.item");

for (let i = 0; i < items.length; i++) {
    i % 2 === 0 ? items[i].style.color = "yellow" : items[i].style.color = "red";

    items[i].style.fontSize = "20px";
};


textos.classList.add("clsTexto");
textos.classList.remove("clsTextos");

textos.classList.toggle("pepito");

textos.classList.contains("clsTextos") ?
console.log("Si contiene la clase") : 
console.log("No contiene la clase");

let link = document.getElementById("mylink");

let href = link.getAttribute("target");
link.setAttribute("target", "_blank");
link.removeAttribute("target", "_blank")


let nuevoP = document.createElement("p");
let nuevoContenido = document.createTextNode("hola mundo desde JS");
nuevoP.appendChild(nuevoContenido);

let principal = document.getElementById("principal");
principal.appendChild(nuevoP);


let boton = document.getElementById("cargarBoton");
boton.addEventListener("click", function() {
    let input = document.getElementsByTagName("input")[0];
    input.value = "cargar datos desde JS";
});

boton.onclick = cargar();
