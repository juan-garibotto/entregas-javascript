let nombre ;
let apellido ;
let titular;

while (true) {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");

    alert("Hola " + nombre + " " + apellido + "!");

    titular = prompt("¿Es usted el/la titular de la tarjeta?");

    if (titular.toLowerCase() === "si") {
        alert("Pulse enter para continuar");
        break;
    } else if (titular.toLowerCase() === "no") {
        alert("Solo el titular puede realizar la compra.");
        
    } else {
        alert("Respuesta no válida. Por favor, ingrese 'si' o 'no'.");
    }
}


function cuotasTarjeta(montoTotalTarjeta, pagos) {
    let cuotaMensual = montoTotalTarjeta / pagos;
    return cuotaMensual;
}

let pagos;

while (true) {
    pagos = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6, 12, 24):"));

    if (pagos === 3 || pagos === 6 || pagos === 12 || pagos === 24) {
        break; // Sale del bucle si la entrada es válida
    } else {
        alert("No disponemos de esa cantidad de cuotas. Por favor, ingrese una opción válida.");
    }
}

let montoTotalTarjeta = parseFloat(prompt("Ingrese el monto total de la tarjeta de crédito:"));

let cuotaMensualTarjeta = cuotasTarjeta(montoTotalTarjeta, pagos);

alert("La cuota mensual de la tarjeta de crédito es: $" + cuotaMensualTarjeta);










