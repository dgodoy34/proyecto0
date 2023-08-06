//----------------------------------------------------------------------------------------------------
    /*/ Función para agregar un producto al carrito
    function agregarAlCarrito(nombreProducto, precioProducto) {
        // Obtener el carrito actual almacenado en localStorage (si existe)
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find((item) => item.nombre === nombreProducto);

        if (productoExistente) {
            // Si el producto ya existe, incrementar la cantidad
            productoExistente.cantidad += 1;
        } else {
            // Si el producto no existe, agregarlo al carrito
            const nuevoProducto = {
                nombre: nombreProducto,
                precio: precioProducto,
                cantidad: 1,
            };
            carrito.push(nuevoProducto);
        }

        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la visualización del carrito
        mostrarCarrito();
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        // Vaciar el carrito en localStorage
        localStorage.removeItem('carrito');

        // Actualizar la visualización del carrito
        mostrarCarrito();
    }

    // Función para mostrar el contenido del carrito en el documento HTML
    function mostrarCarrito() {
        const carritoLista = document.getElementById('carrito-lista');
        const totalElement = document.getElementById('total');

        // Obtener el carrito actual almacenado en localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Limpiar el contenido del carrito en el documento HTML
        carritoLista.innerHTML = '';
        totalElement.textContent = '0';

        // Recorrer los productos en el carrito y mostrarlos en el documento HTML
        let total = 0;
        carrito.forEach((producto) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}`;
            carritoLista.appendChild(listItem);

            total += producto.precio * producto.cantidad;
        });

        // Actualizar el total del carrito en el documento HTML
        totalElement.textContent = total;
    }

    // Mostrar el contenido del carrito al cargar la página
    window.addEventListener('load', mostrarCarrito);*/
//-------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------
/*/ Función para finalizar la compra y mostrar el carrito en una ventana emergente
function finalizarCompra() {
  const carritoHTML = generarContenidoCarrito();
  const popup = window.open('', 'Carrito de Compra', 'width=400,height=600');
  popup.document.body.innerHTML = carritoHTML;
}

// Asociar eventos a botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => {
      const nombre = boton.getAttribute('data-nombre');
      const precio = parseFloat(boton.getAttribute('data-precio'));
      agregarAlCarrito(nombre, precio);
  });
});

// Asociar evento a botón "Mostrar Carrito"
const mostrarCarritoBtn = document.getElementById('mostrar-carrito');
mostrarCarritoBtn.addEventListener('click', finalizarCompra);

// Asociar evento a botón "Vaciar Carrito"
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Mostrar el contenido del carrito al cargar la página
window.addEventListener('load', mostrarCarrito);*/
//-----------------------------------------------------------------------------------------------------
// Función para agregar un producto al carrito
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

// Función para vaciar el carrito
function vaciarCarrito() {
  localStorage.removeItem('carrito');
  mostrarCarrito();
}

// Función para mostrar el contenido del carrito en el documento HTML
function mostrarCarrito() {
  const carritoLista = document.getElementById('carrito-lista');
  const totalElement = document.getElementById('total');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  carritoLista.innerHTML = '';
  totalElement.textContent = '0';

  let total = 0;
  carrito.forEach(function(producto) {
      const listItem = document.createElement('li');
      listItem.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio.toFixed(2)}`;
      carritoLista.appendChild(listItem);

      total += producto.precio * producto.cantidad;
  });

  totalElement.textContent = total.toFixed(2);
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



// Función para finalizar la compra y mostrar el modal con el carrito
function finalizarCompra() {
  mostrarCarritoModal(); // Actualiza el contenido del modal
  const modal = document.getElementById('modal-carrito');
  modal.style.display = 'block';
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let total = 0;

  carrito.forEach(function(producto) {
      total += producto.precio * producto.cantidad;
  });

  return total;
}

// Función para finalizar la compra y mostrar el modal con el carrito
function finalizarCompra() {
  mostrarCarritoModal(); // Actualiza el contenido del modal
  const modal = document.getElementById('modal-carrito');
  modal.style.display = 'block';
}

// Función para generar el contenido del carrito en formato HTML
function generarContenidoCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  let contenidoHTML = '<ul>';
  carrito.forEach(function(producto) {
      contenidoHTML += `<li>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio.toFixed(2)}</li>`;
  });
  contenidoHTML += '</ul>';

  return contenidoHTML;
}

// Función para finalizar la compra y mostrar el modal con el carrito
function finalizarCompra() {
  mostrarCarritoModal(); // Actualiza el contenido del modal
  const modal = document.getElementById('modal-carrito');
  modal.style.display = 'block';
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

// Asociar evento a botón "Vaciar Carrito"
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Asociar evento a botón "Finalizar Compra"
const finalizarCompraBtn = document.getElementById('finalizar-compra');
finalizarCompraBtn.addEventListener('click', finalizarCompra);

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
window.addEventListener('load', mostrarCarrito);

/* Función para manejar el clic en el botón "Finalizar Compra" en el modal
function pagar() {
  // Aquí puedes realizar las acciones necesarias para el proceso de pago
  alert('¡Gracias por tu compra! Se te redirigirá a la página de pago.');
  window.location.href = 'https://www.ejemplo.com/pago'; // Cambia la URL por la de tu página de pago real
}*/

// Función para manejar el clic en el botón "Finalizar Compra" en el modal
function pagar() {
  // Aquí puedes realizar las acciones necesarias para el proceso de pago
  Swal.fire({
    title: '¡Gracias por tu compra!',
    text: 'Se te redirigirá a la página de pago.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '../js/pagos.html'; // Cambia la URL por la de tu página de pago real
    }
  });
}

// Asociar evento al botón "Finalizar Compra" en el modal
const btnPagar = document.getElementById('btn-pagar');
btnPagar.addEventListener('click', pagar);