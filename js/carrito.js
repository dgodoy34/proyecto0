let carrito = [];
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
}