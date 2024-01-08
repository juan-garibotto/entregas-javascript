let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
var MontoProducto = prompt ("Ingrese el monto del producto");

{alert (nombre + " " + apellido + " " + "su monto a pagar es" + " " + MontoProducto);} 

let titular = prompt ("Es usted el/la titular de la tarjeta?");
    while (titular != "si") {alert ("Solo el titular puede realizar la compra.");}
        {alert ("Pulse Enter para seguir con la compra!");}

let pagos = Number (prompt ("En cuantas cuotas desea abonarlo?"));

var pagoTres = 3;
var pagoSeis = 6;
var pagoDoce = 12;
var pagoVenti = 24; 

var divTres = MontoProducto / pagoTres ;
var divSeis = MontoProducto / pagoSeis ;
var divDoce = MontoProducto / pagoDoce ;
var divVenti = MontoProducto / pagoVenti ;



if (pagos === 3) 
alert ("Elegiste el pago en 3 cuotas de" + " "  + divTres );
    else if ( pagos === 6) 
    alert ("Elegiste el pago en 6 cuotas de" + " "  + divSeis );
        else if ( pagos === 12) 
        alert ("Elegiste el pago en 12 cuotas de" + " "  + divDoce );
            else if ( pagos === 24) 
            alert ("Elegiste el pago en 24 cuotas de" + " "  + divVenti );
                else {alert ("No tenemos esa cantidad de cuotas");}










