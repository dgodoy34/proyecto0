//inicio de buscador de registro.html

// Array con los elementos a buscar
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

//fin buscador

   // Función para generar contraseñas aleatorias
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

  // Función para guardar la contraseña en Local Storage utilizando JSON
  function guardarContrasenaLocalStorage(contrasena) {
    const contrasenasGuardadas = obtenerContrasenasLocalStorage();
    contrasenasGuardadas.push(contrasena);
    localStorage.setItem("contrasenas", JSON.stringify(contrasenasGuardadas));
  }

  // Función para obtener las contraseñas guardadas en Local Storage
  function obtenerContrasenasLocalStorage() {
    const contrasenasJSON = localStorage.getItem("contrasenas");
    return contrasenasJSON ? JSON.parse(contrasenasJSON) : [];
  }

  //nuevo
  // Función para guardar el usuario y la contraseña en Local Storage utilizando JSON
function guardarUsuarioYContrasenaLocalStorage(usuario, contrasena) {
  const usuariosGuardados = obtenerUsuariosYContrasenasLocalStorage();
  usuariosGuardados.push({ usuario: usuario, contrasena: contrasena });
  localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
}

// Función para obtener los usuarios y contraseñas guardados en Local Storage
function obtenerUsuariosYContrasenasLocalStorage() {
  const usuariosJSON = localStorage.getItem("usuarios");
  return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

  // Función para validar el formulario de registro
  function validateForm(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;
    let usuario = document.getElementById("usuario").value;
    let validateForm = true;

    if (name.trim() === "") {
      alert("Por favor, ingresa tu nombre");
      event.preventDefault();
      validateForm = false;
    }

    if (usuario.trim() === "") {
      alert("Por favor, ingresa tu usuario");
      event.preventDefault();
      validateForm = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Por favor, ingresa un correo electrónico válido");
      event.preventDefault();
      validateForm = false;
    }

    if (telefono.trim() === "") {
      alert("Por favor, ingresa tu telefono");
      event.preventDefault();
      validateForm = false;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      event.preventDefault();
      validateForm = false;
    }

    //nuevo

    // Comprobamos si el usuario ya existe
  const usuariosGuardados = obtenerUsuariosYContrasenasLocalStorage();
  const existingUser = usuariosGuardados.find(user => user.usuario === usuario);

  if (existingUser) {
    alert("El nombre de usuario ya está en uso. Por favor, elige otro nombre de usuario.");
    event.preventDefault();
    validateForm = false;
    
  }

  return validateForm;

    // Si todo está correcto, el formulario se envía
    if (validateForm) {
      guardarUsuarioYContrasenaLocalStorage(usuario);
      guardarContrasenaLocalStorage(password);
      alert("Formulario correcto gracias por registrarse... ahora puedes loguearte");
      
      console.log("Formulario correcto gracias por registrarse...");
      formulario.reset();
      
    } else {
      event.preventDefault();
    }

    window.location.href = "login.html";

    return validateForm;
  }

  //Funcion para login

  function iniciarSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar las credenciales del usuario en el Local Storage
    const storedPasswords = obtenerContrasenasLocalStorage();
    const contrasenaGenerada = storedPasswords.find((contrasena) => contrasena === password);

    // Comparar el nombre de usuario y contraseña con los valores guardados en el Local Storage
    if (contrasenaGenerada) {
      // Si la contraseña ingresada coincide con una contraseña generada y guardada
      alert("Inicio sesión exitoso...\nUsuario: " + username + "\nContraseña: " + password);
      //redireccionamiento de pagina
      window.location.href = "carrito.html";
      
    } else {
      // Si la contraseña ingresada no coincide con ninguna contraseña generada y guardada
      alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
    }
    
  }