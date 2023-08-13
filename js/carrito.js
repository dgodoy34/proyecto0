// Función para agregar un producto al carrito en el Local Storage
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
  mostrarCarrito();
}

// Función para mostrar el contenido del carrito en la página
function mostrarCarrito() {
  const carritoLista = document.getElementById('carrito-lista');
  const totalElement = document.getElementById('total');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  carritoLista.innerHTML = '';
  totalElement.textContent = '0';

  let total = 0;
  carrito.forEach(function(producto) {
    const listItem = document.createElement('div');
    listItem.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${parseFloat(producto.precio).toFixed(2)}`;
    carritoLista.appendChild(listItem);

    total += parseFloat(producto.precio) * producto.cantidad;
  });

  totalElement.textContent = total.toFixed(2);
}

// Función para vaciar el carrito
function vaciarCarrito() {
  localStorage.removeItem('carrito');
  mostrarCarrito();
}



// Asociar evento a botón "Finalizar Compra" en el modal
const finalizarCompraBtn = document.getElementById('finalizar-compra');
finalizarCompraBtn.addEventListener('click', finalizarCompra);

// Asociar evento a botón "Vaciar Carrito"
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
vaciarCarritoBtn.addEventListener('click', function() {
  vaciarCarrito();
});

// Asociar evento al botón "pagar" en el modal
const btnPagar = document.getElementById('btn-pagar');
btnPagar.addEventListener('click', function() {
  pagar();
});

// Cerrar el modal cuando se hace clic en el botón de cierre
const modal = document.getElementById('modal-carrito');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Mostrar el contenido del carrito al cargar la página
window.addEventListener('load', function() {
  mostrarCarrito();
});

// Función para manejar el clic en el botón "Finalizar Compra" en el modal
function finalizarCompra() {
  mostrarCarritoModal();
  const modal = document.getElementById('modal-carrito');
  modal.style.display = 'block';
}

// Función para generar el contenido del carrito en formato HTML
function generarContenidoCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let contenidoHTML = '';

  carrito.forEach(function(producto) {
    contenidoHTML += `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio total: $${(producto.precio * producto.cantidad).toFixed(2)}<br>`;
  });

  return contenidoHTML;
}

// Función para mostrar el contenido del carrito en el modal
function mostrarCarritoModal() {
  const carritoHTML = generarContenidoCarrito();
  const modalCarrito = document.getElementById('popup-carrito');
  modalCarrito.innerHTML = carritoHTML;

  const modalTotal = document.getElementById('modal-total');
  let total = calcularTotalCarrito();
  modalTotal.textContent = total.toFixed(2);
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let total = 0;

  carrito.forEach(function(producto) {
    total += parseFloat(producto.precio) * producto.cantidad;
  });

  return total;
}

// Función para manejar el clic en el botón "pagar" en el modal
function pagar() {
  Swal.fire({
    title: '¡Gracias por tu compra!',
    text: 'Se te redirigirá a la página de pago.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '../pages/pagos.html'; 
    }
  });
}

// Asociar eventos a botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
botonesAgregar.forEach(function(boton) {
  boton.addEventListener('click', function() {
    const nombre = boton.getAttribute('data-nombre');
    const precio = parseFloat(boton.getAttribute('data-precio'));
    agregarAlCarrito(nombre, precio);
  });
});
