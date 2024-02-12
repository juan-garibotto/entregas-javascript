const productos = [

    {
        id: 1,
        nombre: "Camisa Blanca Light",
        img: "camisablancabazta.jpg",
        precio: 45000,
    },

    {
        id: 2,
        nombre: "Camisa Negra Darkness",
        img: "camisanegrabazta.jpg",
        precio: 45000,
    },
    {
        id: 3,
        nombre: "Camisa Oversize",
        img: "camisaoversizebazta.jpg",
        precio: 50000,
    },
    {
        id: 4,
        nombre: "Chaleco Blanco Life",
        img: "chalecoblancobazta.jpg",
        precio: 90000,
    },
    {
        id: 5,
        nombre: "Pantalon Negro Relax",
        img: "pantalonnegrobazta.jpg",
        precio: 60000,
    },
    {
        id: 6,
        nombre: "Pantalon Negro Over",
        img: "pantalonoverbazta .jpg",
        precio: 68000,
    },
    {
        id: 7,
        nombre: "Short fresh",
        img: "shortbazta.jpg",
        precio: 35000,
    }
]

const contenedorProductos = document.getElementById ("containerProductos");


function crearProductos(productos) {
    productos.forEach(producto => {
        const nuevaPrenda = document.createElement("div");
        nuevaPrenda.classList = "tarjeta-prenda";
        nuevaPrenda.innerHTML = `
        <img src="./img/${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(nuevaPrenda);
        nuevaPrenda.getElementsByTagName("button") [0].addEventListener("click", () => agregarCarrito (producto))
    });
}

crearProductos (productos);



