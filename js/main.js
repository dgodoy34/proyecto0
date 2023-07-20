//inicio de buscador de registro.html

    // Array con los elementos a buscar
    const elementos = [
      { names: "Macetas", precioUnitario: 10 },
      { names: "Fertilizantes", precioUnitario: 5 },
      { names: "Plantas", precioUnitario: 20 },
      { names: "Sustrato", precioUnitario: 8 },
      { names: "Parafernalia", precioUnitario: 15 }
    ];

    document.getElementById("show").addEventListener("click", function() {
      const productNames = document.getElementById("product").value.toLowerCase();
      const product = elementos.find(stock => stock.names.toLowerCase() === productNames);

      if (product) {
        alert(`${product.names}, precio unitario $${product.precioUnitario}`);
        console.log(`El producto ${product.names} está en la lista.`);
      } else {
        alert("Producto no encontrado.");
        console.log("Producto no encontrado en la lista.");
      }
    });

 //fin buscador

 //inicio de registro.html

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;
    let validateForm = true;

    // Validar que el campo de nombre no esté vacío
    if (name.trim() === "") {
      alert("Por favor, ingresa tu nombre");
      //console.log("Por favor, ingresa tu nombre.")
      ev.preventDefault();
      validateForm = false;
    }

    // Validar que el campo de correo electrónico sea válido
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Por favor, ingresa un correo electrónico válido");
      //console.log("Por favor, ingresa un correo electrónico válido.")
      ev.preventDefault();
      validateForm = false;
    }

    // Validar que el campo de telefono no esté vacío
    if (telefono.trim() === "") {
      alert("Por favor, ingresa tu telefono");
      //console.log("Por favor, ingresa tu telefono.")
      ev.preventDefault();
      validateForm = false;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      //console.log("La contraseña debe tener al menos 8 caracteres.")
      ev.preventDefault();
      validateForm = false;
    }

    // Si todo está correcto, el formulario se envía
    if (validateForm()) {
      alert("Formulario correcto gracias por registrarse...");
      console.log("Formulario correcto gracias por registrarse...");
      
    }
    return validateForm;

    
    /* Si todo está correcto, el formulario se envía
    alert("Formulario correcto gracias por registrarse...");
    console.log("Formulario correcto gracias por registrarse...")
    return true;*/
  }

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
    alert("Contraseña aleatoria generada: " + contrasena);
    console.log("Contraseña aleatoria generada: " + contrasena)
  
  }

  

    //login.html

    function iniciarSesion() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;


      // verificar las credenciales del usuario en servidor
      console.log("\nUsuario: " + username + "\nContraseña: " + password)
      //comparar el nombre de usuario y contraseña con valores predefinidos o hacer una solicitud a un servidor para validar las credenciales

      // En este ejemplo, simplemente mostramos una alerta con los datos del usuario ingresados
      alert("Inicio sesión...\nUsuario: " + username + "\nContraseña: " + password);
    }
