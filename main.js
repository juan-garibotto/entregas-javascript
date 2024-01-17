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

const productos = [ 
    { prenda: "Remera nike 90s", precio: 15000 },
    { prenda: "Remera Adidas old", precio: 14000 },
    { prenda: "Buzo Adidas 90s", precio: 25000 },
    { prenda: "Remera Puma classic", precio: 12000 },
    { prenda: "Buzo nike sb", precio: 28000 },
    { prenda: "zapatillas nike TN blue", precio: 50000 },
    { prenda: "zapatillas nike TN grey", precio: 50000 },
    { prenda: "zapatillas nike air max", precio: 63000 },
    { prenda: "zapatillas adidas yeezy", precio: 75000 },
    { prenda: "short adidas classic", precio: 13000 },
    { prenda: "short nike sb", precio: 16000 },
    { prenda: "short lacoste classic", precio: 19000 },
];

let tipoBusqueda = prompt("Ingrese el tipo de prenda que busca").toLowerCase();

// Filtrar la lista de productos según el tipo de prenda
let productosFiltrados = productos.filter(item => item.prenda.toLowerCase().includes(tipoBusqueda));

// Mostrar la lista de productos filtrada en un solo alert
if (productosFiltrados.length > 0) {
    let mensaje = "Productos encontrados:\n";
    productosFiltrados.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.prenda} - Precio: $${producto.precio}\n`;
    });

    alert(mensaje);

    let seleccionProducto = parseInt(prompt("Ingrese el número del producto que desea comprar:"));

    // Verificar si la selección es válida
    if (seleccionProducto >= 1 && seleccionProducto <= productosFiltrados.length) {
        let productoSeleccionado = productosFiltrados[seleccionProducto - 1];

        alert(`Producto Seleccionado\nPrenda: ${productoSeleccionado.prenda}\nPrecio: $${productoSeleccionado.precio}`);

        function cuotasTarjeta(precioProducto, pagos) {
            let cuotaMensual = precioProducto / pagos;
            return cuotaMensual;
        }

        let pagos;

        while (true) {
            pagos = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6, 12, 24):"));

            if (pagos === 3 || pagos === 6 || pagos === 12 || pagos === 24) {
                break; 
            } else {
                alert("No disponemos de esa cantidad de cuotas. Por favor, ingrese una opción válida.");
            }
        }

        let cuotaMensualTarjeta = cuotasTarjeta(productoSeleccionado.precio, pagos);

        alert("La cuota mensual de la tarjeta de crédito es: $" + cuotaMensualTarjeta);

    } else {
        alert("Selección no válida. Por favor, elija un número de producto válido.");
    }
} else {
    alert("No se encontraron productos para el tipo ingresado.");
}
