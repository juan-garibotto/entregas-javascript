// CARRITO //

const contenedorCarrito = document.getElementById("containerCarrito");
const precioElemento = document.getElementById ("costoTotal");


function crearProductos() {
    contenedorCarrito.innerHTML =" ";
    const productos = JSON.parse(localStorage.getItem("prendas"));
    if (productos && productos.length > 0) {
      productos.forEach((producto) => {
        const nuevaPrenda = document.createElement("div");
        nuevaPrenda.classList = "tarjeta-carrito";
        nuevaPrenda.innerHTML = `
      <img src="./img/${producto.img}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <div>
      <button>-</button>
      <span>${producto.cantidad}</span>
      <button>+</button>
      </div>
      `;
        contenedorCarrito.appendChild(nuevaPrenda);
            nuevaPrenda.getElementsByTagName("button")[0].addEventListener("click", () => {
                restarCarrito(producto);
                crearProductos();
                const cuentaElementos = e.target.parentElement.getElementsByTagName("button")[0];
                cuentaElementos.innerText = agregarCarrito(producto);
                actualizarTotales ();
            });
            nuevaPrenda.getElementsByTagName("button")[1].addEventListener("click", () => {
                agregarCarrito(producto);
                crearProductos();
                const cuentaElementos = e.target.parentElement.getElementsByTagName("button")[0];
                cuentaElementos.innerText = agregarCarrito(producto);
                actualizarTotales ();
            });
        });
    }
}

crearProductos();
actualizarTotales ();


function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("prendas"));
    let total = 0;

    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        precioElemento.innerText = total;
    } else {
        
        precioElemento.innerText = "0";
    }
}

document.getElementById("reinicio").addEventListener("click", () => {
    contenedorTarjetas.innerHTML = "";
    reiniciarCarrito();
  });

function reiniciarCarrito(){
    localStorage.removeItem("prendas");
    crearProductos();
    actualizarNumeroCarrito();
  }

  actualizarNumeroCarrito();