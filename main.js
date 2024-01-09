let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

alert( "Hola" + " " + nombre + " " + apellido + "!");

let titular = prompt("¿Es usted el/la titular de la tarjeta?");

while (titular.toLowerCase() !== "si") {
    alert("Solo el titular puede realizar la compra.");}

function cuotasTarjeta(montoTotalTarjeta, pagos) {
    var cuotaMensual = montoTotalTarjeta / pagos;
    return cuotaMensual;}

var pagos = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6, 12, 24):"));

if (pagos === 3 || pagos === 6 || pagos === 12 || pagos === 24) {
  
    var montoTotalTarjeta = parseFloat(prompt("Ingrese el monto total de la tarjeta de crédito:"));

    var cuotaMensualTarjeta = cuotasTarjeta(montoTotalTarjeta, pagos);

    alert("La cuota mensual de la tarjeta de crédito es: $" + cuotaMensualTarjeta);} 
else {
    alert("No tenemos esa cantidad de cuotas");}










