/*let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ nombre: producto, precio: precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoLista = document.getElementById("carrito-lista");
  const totalElement = document.getElementById("total");

  carritoLista.innerHTML = "";
  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoLista.appendChild(li);
  });

  totalElement.textContent = total;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}*/

//Coloca este bloque de código dentro de una etiqueta <script> en tu archivo HTML -->

    // Función para agregar un producto al carrito
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
    window.addEventListener('load', mostrarCarrito);
