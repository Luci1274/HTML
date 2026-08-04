function prueba_A() {
    let A = Number(prompt("Ingrese el primer numero"));
    let B = Number(prompt("Ingrese el segundo numero"));
    let C = Number(prompt("Ingrese el tercer numero"));
    let es_mayor;
    if (B > A) {
        if (C > B) {
            alert(es_mayor = C);
        } else {
            alert(es_mayor = B);
        }
    } else if (C > A) {
        alert(es_mayor = C);
    } else {
        alert(es_mayor = A);
    }
};

function prueba_B() {
    let numero = prompt("Ingrese el numero");
    if (numero % 2 === 0) {
        alert("Es par");
    } else {
        alert("Es impar");
    }
};

function dia_semana() {
    let now = new Date();
    let nomDay = now.getDay();

    switch (nomDay) {
        case 6:
            alert("Sabado");
            break;
        case 0:
            alert("Domingo");
            break;
        case 1:
            alert("Lunes");
            break;
        case 4:
            alert("Martes");
            break;
        default:
            alert("otros");
            break;
    }
};


function calculadora() {
    let a = Number(prompt("Ingrese el primer numero"));
    let b = Number(prompt("Ingrese el segundo numero"));
    let operador = prompt("Ingrese el operador (+,-,*, %)");
    let resultado;

    switch (operador) {
        case "*":
            resultado = a * b;
            alert(`El resultado es ${resultado}`);
            break;
        case "+":
            resultado = a + b;
            alert(`El resultado es ${resultado}`);
            break;
        case "-":
            resultado = a - b;
            alert(`El resultado es ${resultado}`);
            break;
        case "%":
            if (b === 0) {
                alert(error);
                break;
            } else {
                resultado = a % b;
                alert(`El resultado es ${resultado}`);
                break;
            }
        default:
            alert("Error al realizar el calculo");
            break;
    }
};

function calculo() {
    let num = Number(prompt("Ingrese un numero"));
    let resultado = (num >= 10000) ? alert(num * 0.80) : alert(num);
};

function mayor_b() {
    let A = 1;
    let B = 2;
    let C = 3;

    let mayor = A>B ? (A>C ? A : C) : (B>C ? B: C)
}