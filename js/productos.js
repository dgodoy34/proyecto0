function agregarAlCarrito(nombreProducto, precioProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(function(item) {
        return item.nombre === nombreProducto;
    });

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const nuevoProducto = {
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1
        };
        carrito.push(nuevoProducto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//----------------------------------------------------------------
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(nombreProducto, precioProducto) {
    const productoExistente = carrito.find(item => item.nombre === nombreProducto);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const nuevoProducto = {
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1
        };
        carrito.push(nuevoProducto);
    }

    guardarCarritoEnLocalStorage();

    Swal.fire({
        title: 'Añadido al Carrito',
        text: `${nombreProducto} se ha añadido al carrito.`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    });
}

function mostrarDetallesProducto(nombreProducto, precioProducto) {
    // Tu código para obtener los detalles del producto

    // Luego, muestra los detalles usando SweetAlert2
    Swal.fire({
        title: 'Detalles del Producto',
        text: `Detalles de ${nombreProducto}`,
        imageUrl: '../assets/images/combo veg-bloom.jpg',
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: `Detalles de ${nombreProducto}`,
        showCancelButton: true,
        confirmButtonText: 'Agregar al Carrito',
        cancelButtonText: 'Cancelar',
        focusConfirm: false,
    }).then((result) => {
        if (result.isConfirmed) {
            agregarAlCarrito(nombreProducto, precioProducto);
        }
    });
}
