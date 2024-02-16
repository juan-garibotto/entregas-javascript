const contenedorCarrito = document.getElementById("containerCarrito");



function crearTarjetasProductosCarrito() {
    const productos = JSON.parse(localStorage.getItem("prendas")) || [];
      if (productos && productos.length > 0) {
        productos.forEach((producto) => {
          const nuevoElementoCarrito = document.createElement("div");
          nuevoElementoCarrito.classList = "tarjeta-carrito";
          nuevoElementoCarrito.innerHTML = `
            <img src="./img/${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
              <button class="botonRestar">-</button>
              <span class="cantidad" >${localStorage.getItem(`cantidad-${producto.id}`) || 1}</span>
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
              actualizarNumeroTarjeta();;
          });

          botonSumar.addEventListener("click", () => {
              const nuevaCantidad = agregarCarrito(producto);
              cantidad.textContent = nuevaCantidad;
              actualizarTotales();
              actualizarNumeroCarrito();
              actualizarNumeroTarjeta();;
          });

         
      });
  }
  actualizarTotales();
  actualizarNumeroCarrito();
  actualizarNumeroTarjeta();

 
}

crearTarjetasProductosCarrito();
    



    
   
    
