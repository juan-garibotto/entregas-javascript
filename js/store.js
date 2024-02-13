function crearProductos(productos) {
    const contenedorProductos = document.getElementById ("seccionProductos");
    if (productos && productos.length > 0) {
      productos.forEach((producto) => {
      const nuevaPrenda = document.createElement("div");
      nuevaPrenda.classList = "tarjeta-prenda";
      nuevaPrenda.innerHTML = `
        <img src="./img/${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button>
      `;
      contenedorProductos.appendChild(nuevaPrenda);
      nuevaPrenda.getElementsByTagName ("button")[0].addEventListener("click", () => {
        agregarCarrito(producto);
        actualizarNumeroCarrito ();
      });
    });
  }
  }
  
  crearProductos(productos);
  
  