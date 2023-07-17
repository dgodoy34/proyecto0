function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;

    // Validar que el campo de nombre no esté vacío
    if (name.trim() === "") {
      alert("Por favor, ingresa tu nombre");
      //console.log("Por favor, ingresa tu nombre.")
      ev.preventDefault();
      return false;
    }

    // Validar que el campo de correo electrónico sea válido
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Por favor, ingresa un correo electrónico válido");
      //console.log("Por favor, ingresa un correo electrónico válido.")
      ev.preventDefault();
      return false;
    }

    // Validar que el campo de nombre no esté vacío
    if (telefono.trim() === "") {
      alert("Por favor, ingresa tu telefono");
      //console.log("Por favor, ingresa tu telefono.")
      ev.preventDefault();
      return false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      //console.log("La contraseña debe tener al menos 8 caracteres.")
      ev.preventDefault();
      return false;
    }

    // Si todo está correcto, el formulario se envía
    alert("Formulario correcto gracias por registrarse...");
    console.log("Formulario correcto gracias por registrarse...")
    return true;
  }

  // Función para generar contraseñas aleatorias
  function generarContrasenaAleatoria() {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
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