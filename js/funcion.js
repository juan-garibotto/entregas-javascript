// FUNCIONALIDAD DEL CARRITO //


function nuevoProductoMemoria (producto ){
    const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        return nuevoProducto;
}

function agregarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("prendas")) || [];
    const ordenPrenda = memoria.findIndex(prendas => prendas.id === producto.id);

    if (ordenPrenda === -1) {
        const nuevoProducto = nuevoProductoMemoria(producto);
        memoria.push(nuevoProducto);
    } else {
        memoria[ordenPrenda].cantidad++;
    }

    localStorage.setItem("prendas", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    actualizarTotales();

    return memoria[ordenPrenda] ? memoria[ordenPrenda].cantidad : 0;
}



   


function restarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("prendas")) || [];
    const ordenPrenda = memoria.findIndex(prenda => prenda.id === producto.id);
    const nuevaMemoria = [];

    if (memoria[ordenPrenda].cantidad === 1){
        memoria.splice(ordenPrenda ,1);
        
    } else {
        memoria[ordenPrenda].cantidad --;
    }
    localStorage.setItem("prendas",JSON.stringify (memoria));
    actualizarNumeroCarrito ();
    actualizarTotales();
}





const cuentaCarrito = document.getElementById ("num-carrito")

 function actualizarNumeroCarrito(){
        let cuenta = 0;
        const memoria = JSON.parse(localStorage.getItem("prendas"));
        if(memoria && memoria.length > 0){
          cuenta = memoria.reduce((acum, current)=>acum+current.cantidad,0)
          cuentaCarrito.innerText = cuenta;
        } else {
        cuentaCarrito.innerText = 0;
            }
      }


actualizarNumeroCarrito ();




