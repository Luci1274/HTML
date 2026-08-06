function mostrar_calculadora() {
    const calculadora = document.getElementById("calculadora");
    calculadora.style.display = (calculadora.style.display === "none") ? "block" : "none;"
}

const textoResultado = document.getElementById("texto_resultado");
const contenedorBotones = document.getElementById("contenedor_botones");

let expresion = "";

contenedorBotones.addEventListener("click", (evento) => {
    const elemento = evento.target;
    if (!elemento.classList.contains("botones")) return;
    const valor = elemento.innerText;

    if (valor === "=") {
        if (expresion.trim() === "") return;
        try {
            const resultado = eval(expresion);
            textoResultado.innerText = resultado;
            expresion = resultado.toString();
        } catch (error) {
            textoResultado.innerText = "Error";
            expresion = "";
        }
    } else if (valor === "C") {
        expresion = "";
        textoResultado.innerText = "0";
    } else {
        if (textoResultado.innerText === "0" && valor !== "%") {
            expresion = valor;
        } else {
            expresion = valor;
        }
        textoResultado.innerText = expresion;
    }
});