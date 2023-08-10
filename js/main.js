//inicio de buscador de registro.html

/*/ Array con los elementos a buscar
const elementos = [
  { names: "Macetas", precioUnitario: 500 },
  { names: "Fertilizantes", precioUnitario: 250 },
  { names: "Plantas", precioUnitario: 20 },
  { names: "Sustrato", precioUnitario: 120 },
  { names: "Parafernalia", precioUnitario: 150 }
];

document.getElementById("show").addEventListener("click", function () {
  const productNames = document.getElementById("product").value.toLowerCase();
  const product = elementos.find(stock => stock.names.toLowerCase() === productNames);

  if (product) {
    alert(`${product.names}, precio unitario $${product.precioUnitario}`);
    console.log(`El producto ${product.names} está en la lista.`);
  } else {
    alert("Producto no encontrado.");
    console.log("Producto no encontrado en la lista.");
  }
  // Limpiar el campo de entrada después de la búsqueda
  document.getElementById("product").value = "";


});



//fin buscador*/


// Funciones de generación y almacenamiento de contraseñas

function generarContrasenaAleatoria() {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const longitudContrasena = 8;
  let contrasena = "";

  for (let i = 0; i < longitudContrasena; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }

  document.getElementById("password").value = contrasena;
}

function guardarUsuarioYContrasenaLocalStorage(usuario, contrasena) {
  const usuariosGuardados = obtenerUsuariosYContrasenasLocalStorage();
  usuariosGuardados.push({ usuario: usuario, contrasena: contrasena });
  localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
}

function obtenerUsuariosYContrasenasLocalStorage() {
  const usuariosJSON = localStorage.getItem("usuarios");
  return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

// Función para el registro con SweetAlert

async function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let password = document.getElementById("password").value;
  let usuario = document.getElementById("usuario").value;

  // Validar campos
  if (name.trim() === "" || usuario.trim() === "" || telefono.trim() === "" || password.length < 8 || email.trim() === "") {
    Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
    return;
  }

  // Comprobar si el usuario ya existe
  const usuariosGuardados = obtenerUsuariosYContrasenasLocalStorage();
  const existingUser = usuariosGuardados.find(user => user.usuario === usuario);

  if (existingUser) {
    Swal.fire('Error', 'El nombre de usuario ya está en uso. Por favor, elige otro nombre de usuario.', 'error');
    return;
  }

  // Mostrar SweetAlert de éxito
  const result = await Swal.fire({
    icon: 'success',
    title: 'Formulario correcto gracias por registrarse... ahora puedes loguearte',
    text: '¡Registro exitoso!',
    showCancelButton: false,
    confirmButtonText: 'OK'
    
  });

  window.location.href = "login.html";

  if (result.isConfirmed) {
    guardarUsuarioYContrasenaLocalStorage(usuario, password);
    document.getElementById("formulario").reset();
    
  }
}
// Función para el inicio de sesión con SweetAlert

function iniciarSesion() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUsers = obtenerUsuariosYContrasenasLocalStorage();
  const user = storedUsers.find((user) => user.usuario === username && user.contrasena === password);

  if (user) {
    //Swal.fire('Inicio de sesión exitoso');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      showConfirmButton: false,
      timer: 3000
    })
   
    window.location.href = "carrito.html";
  } else {
    Swal.fire('Error', 'Usuario o contraseña incorrectos. Intenta de nuevo.', 'error');
  }
}
