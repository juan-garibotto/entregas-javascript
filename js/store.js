function crearProductos() {
    const contenedorProductos = document.getElementById ("seccionProductos");
    fetch ("./js/data.json")
      .then (response => response.json())
      .then ((productos) =>  {
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
        Swal.fire("¡Producto agregado al carrito!", "", "success");
        agregarCarrito(producto);
        actualizarNumeroCarrito ();
        actualizarTotales();
        
      });
    });
  })
  }
  
  crearProductos();
  
  