function prueba_A() {
    let A = prompt("Ingrese el primer numero");
    let B = prompt("Ingrese el segundo numero");
    let C = prompt("Ingrese el tercer numero");
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
    let numero = prompt("Ingrese el primer numero");
    let parrafo = prompt("Ingrese el segundo numero")
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
            alert("Sabado")
            break;
        case 0:
            alert("Domingo")
            break;
        case 1:
            alert("Lunes")
            break;
        default:
            alert("otros")
            break;
    }
};


function calculadora() {
    let a = 1;
    let b = 2;
    let operador = "*";
    let resultado;

    switch (operador) {
        case "*":
            resultado = a * b;
            alert(resultado);
            break;
        case "+":
            resultado = a + b;
            alert(resultado);
            break;
        case "-":
            resultado = a - b;
            alert(resultado);
            break;
        case "%":
            if (b === 0) {
                alert(error);
                break;
            } else {
                resultado = a % b;
                alert(resultado);
                break;
            }
    }
};

function calculo() {
    let num = 10500;
    let resultado = (num >= 10000) ? console.log(num * 0.80) : console.log(num);
};
calculo()

function mayor_b() {
    let A = 1;
    let B = 2;
    let C = 3;

    let mayor = A>B ? (A>C ? A : C) : (B>C ? B: C)
}

mayor_b()