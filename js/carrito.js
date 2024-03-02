
function crearTarjetasProductosCarrito() {
  const contenedorCarrito = document.getElementById("containerCarrito");
  fetch("./js/data.json")
    .then(response => response.json())
    .then((productos) => {
      productos.forEach((producto) => {
        // Verificar si la cantidad en el localStorage es mayor que cero
        const cantidadEnCarrito = localStorage.getItem(`cantidad-${producto.id}`);

          const nuevoElementoCarrito = document.createElement("div");
          nuevoElementoCarrito.classList = "tarjeta-carrito";
          nuevoElementoCarrito.innerHTML = `
            <img src="./img/${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
              <button class="botonRestar">-</button>
              <span class="cantidad">${cantidadEnCarrito}</span>
              <button class="botonSumar">+</button>
            </div>
          `;

          contenedorCarrito.appendChild(nuevoElementoCarrito);

          const botonRestar = nuevoElementoCarrito.querySelector(".botonRestar");
          const botonSumar = nuevoElementoCarrito.querySelector(".botonSumar");
          const cantidad = nuevoElementoCarrito.querySelector(".cantidad");

          botonRestar.addEventListener("click", () => {
            const nuevaCantidad = restarCarrito(producto);
            if (nuevaCantidad >= 1) {
              cantidad.textContent = nuevaCantidad;
            } else {
              contenedorCarrito.removeChild(nuevoElementoCarrito);
            }
            actualizarTotales();
            actualizarNumeroCarrito();
            actualizarNumeroTarjeta();
          });

          botonSumar.addEventListener("click", () => {
            const nuevaCantidad = agregarCarrito(producto);
            cantidad.textContent = nuevaCantidad;
            actualizarTotales();
            actualizarNumeroCarrito();
            actualizarNumeroTarjeta();
          });
        }
      );
    }
    
)
    actualizarTotales();
    actualizarNumeroCarrito();
    actualizarNumeroTarjeta();
}

crearTarjetasProductosCarrito();
