const tarjetasCarrito = document.querySelectorAll(".tarjeta-carrito");
const cuentaCarrito = document.getElementById ("num-carrito");
const precioElemento = document.getElementById ("costoTotal");


function actualizarNumeroTarjeta() {
  const tarjetasCarrito = document.querySelectorAll(".tarjeta-carrito");
  let numeroTarjeta = 0;

  tarjetasCarrito.forEach((tarjeta) => {
    const cantidad = parseInt(tarjeta.querySelector(".cantidad").textContent);
    numeroTarjeta += cantidad;
  });

  const numeroTarjetaElemento = document.getElementById("num-carrito");
  numeroTarjetaElemento.innerText = numeroTarjeta;

  return numeroTarjeta;
}

actualizarNumeroTarjeta();



function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("prendas"));
  let total = 0;

  if (productos && productos.length > 0) {
      productos.forEach((producto) => {
          total += producto.precio * producto.cantidad;
      });
      precioElemento.innerText = total;
  } else {
      
      precioElemento.innerText = "0";
  }
}






function actualizarNumeroCarrito() {
  const memoria = JSON.parse(localStorage.getItem("prendas")) || [];
  let cuenta = 0;

  if (memoria && memoria.length > 0) {
    cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    return cuentaCarrito.innerText = cuenta;
  }

  cuenta.innerText = 0;
}

actualizarNumeroCarrito ();



  
function agregarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("prendas")) || [];
    const ordenPrenda = memoria.findIndex((prenda) => prenda.id === producto.id);
  
    if (ordenPrenda === -1) {
      memoria.push({ producto, cantidad: 1 });
    } else {
      memoria[ordenPrenda].cantidad++;
    }
  
    localStorage.setItem("prendas", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    actualizarTotales();
    actualizarNumeroTarjeta();
  
    return memoria[ordenPrenda] ? memoria[ordenPrenda].cantidad : 0;
  }



  
function restarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("prendas")) || [];
    const ordenPrenda = memoria.findIndex((prenda) => prenda.id === producto.id);
  
    if (ordenPrenda !== -1) {
      
  
      if (memoria[ordenPrenda].cantidad === 1) {
        
        memoria.splice(ordenPrenda, 1);
      } else {
       
        memoria[ordenPrenda].cantidad--;
      }
  
    localStorage.setItem("prendas", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    actualizarTotales();
    actualizarNumeroTarjeta();

    return memoria[ordenPrenda] ? memoria[ordenPrenda].cantidad : 0;
  }
}
