
/*/ Inicializar emailjs 

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
  
    if (registrationForm) {
      registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("tel").value;
  
        // Validar campos y lógica del formulario 
  
        if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "") {
          Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
          return;
        }
  
        const formData = {
          nombre: nombre,
          email: email,
          telefono: telefono
        };
  
        // Guardar el nuevo registro en LocalStorage
        let registrosGuardados = JSON.parse(localStorage.getItem("registros")) || [];
        registrosGuardados.push(formData);
        localStorage.setItem("registros", JSON.stringify(registrosGuardados));
  
        try {
          await enviarCorreoDeConfirmacion(email, nombre);
          Swal.fire('Éxito', 'Gracias por contactarnos te contestaremos a la brevedad.', 'success');

          
  
          // Limpiar formulario
          registrationForm.reset();
        } catch (error) {
          console.error("Error al enviar el correo de confirmación:", error);
          Swal.fire('Error', 'Hubo un problema al enviar el formulario.', 'error');
        }
      });
    }
  });
  
  async function enviarCorreoDeConfirmacion(destinatario, nombre) {
    emailjs.init("fksMZpFl9TQtslnTL"); 
  
    const mensaje = {
      to: destinatario,
      from: "eltallogrowshop@gmail.com",
      subject: "Confirmación de recepción de formulario",
      text: `Hola ${nombre},\n\nHemos recibido tu formulario de contacto con éxito.\n\nSaludos`
      
    };
  
    await emailjs.send("default_service", "template_p4clcsr", mensaje); 
  }

  console.log("se envio formulario y mail con exito");

  document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("tel").value;
  const comentario = document.querySelector(".text-area").value;

  // Validar campos (puedes agregar más validaciones aquí)
  if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
    Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
    return;
  }

  // Comprobar si el email ya existe en el LocalStorage (necesitas implementar esta función)
  if (existeEmailEnLocalStorage(email)) {
    Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
    return;
  }

  // Guardar en LocalStorage (necesitas implementar esta función)
  guardarEnLocalStorage(nombre, email, telefono, comentario);

  // Mostrar SweetAlert de éxito
  Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');

  // Restablecer el formulario
  document.getElementById('registration-form').reset();
});

  */
/*document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
      registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("tel").value;
        const comentario = document.getElementById("comentario").value;
  
        // Validar campos
        if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
          Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
          return;
        }
  
        // Comprobar si el email ya existe en el LocalStorage
        if (existeEmailEnLocalStorage(email)) {
          Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
          return;
        }
  
        // Guardar en LocalStorage
        guardarEnLocalStorage(nombre, email, telefono, comentario);
  
        // Inicializar EmailJS con tu ID de usuario
        emailjs.init("fksMZpFl9TQtslnTL");
  
        const mensaje = {
          to: email,
          from: "default_service", // Tu dirección de correo electrónico registrada en EmailJS
          subject: "Confirmación de registro",
          text: `Hola ${nombre},\n\n¡Gracias por contactarnos! Tu mensaje ha sido recibido.\n\nSaludos, Equipo de ejemplo`
        };
  
        try {
          await emailjs.send("default_service", "template_p4clcsr", mensaje); // Reemplaza "default_service" y "template_p4clcsr" con tus IDs de servicio y plantilla en EmailJS
          Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');
          registrationForm.reset();
        } catch (error) {
          console.error("Error al enviar el correo:", error);
          Swal.fire('Error', 'Hubo un problema al enviar el correo. Por favor, intenta nuevamente más tarde.', 'error');
        }
      });
    }
  });
  
  // Función para verificar si el email ya existe en LocalStorage
  function existeEmailEnLocalStorage(email) {
    const contactosGuardados = obtenerContactosLocalStorage();
    return contactosGuardados.some(contacto => contacto.email === email);
  }
  
  // Función para guardar el contacto en LocalStorage
  function guardarEnLocalStorage(nombre, email, telefono, comentario) {
    const nuevoContacto = { nombre, email, telefono, comentario };
    const contactosGuardados = obtenerContactosLocalStorage();
    contactosGuardados.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
  }
  
  // Función para obtener los contactos almacenados en LocalStorage
  function obtenerContactosLocalStorage() {
    const contactosJSON = localStorage.getItem("contactos");
    return contactosJSON ? JSON.parse(contactosJSON) : [];
  }*/
  /*document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
      registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("tel").value;
        const comentario = document.getElementById("comentario").value;
  
        // Validar campos
        if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
          Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
          return;
        }
  
        // Comprobar si el email ya existe en el LocalStorage
        if (existeEmailEnLocalStorage(email)) {
          Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
          return;
        }
  
        // Guardar en LocalStorage
        guardarEnLocalStorage(nombre, email, telefono, comentario);
  
        // Inicializar EmailJS con tu ID de usuario
        emailjs.init("fksMZpFl9TQtslnTL");
  
        const serviceID = 'default_service';
        const templateID = 'template_p4clcsr';
  
        try {
          const response = await emailjs.sendForm(serviceID, templateID, this);
          if (response.status === 200) {
            Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');
            registrationForm.reset();
          } else {
            Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
          }
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
          Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
        }
      });
    }
  });
  
  // Función para verificar si el email ya existe en LocalStorage
  function existeEmailEnLocalStorage(email) {
    const contactosGuardados = obtenerContactosLocalStorage();
    return contactosGuardados.some(contacto => contacto.email === email);
  }
  
  // Función para guardar el contacto en LocalStorage
  function guardarEnLocalStorage(nombre, email, telefono, comentario) {
    const nuevoContacto = { nombre, email, telefono, comentario };
    const contactosGuardados = obtenerContactosLocalStorage();
    contactosGuardados.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
  }
  
  // Función para obtener los contactos almacenados en LocalStorage
  function obtenerContactosLocalStorage() {
    const contactosJSON = localStorage.getItem("contactos");
    return contactosJSON ? JSON.parse(contactosJSON) : [];
  }*/
  document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
      registrationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("tel").value;
        const comentario = document.getElementById("comentario").value;
  
        // Validar campos
        if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || comentario.trim() === "") {
          Swal.fire('Error', 'Por favor, completa todos los campos correctamente', 'error');
          return;
        }
  
        // Comprobar si el email ya existe en el LocalStorage
        if (existeEmailEnLocalStorage(email)) {
          Swal.fire('Error', 'El email ya ha sido registrado.', 'error');
          return;
        }
  
        // Guardar en LocalStorage
        guardarEnLocalStorage(nombre, email, telefono, comentario);
  
        // Inicializar EmailJS con tu ID de usuario
        emailjs.init("fksMZpFl9TQtslnTL");
  
        const serviceID = 'default_service';
        const templateID = 'template_p4clcsr';
  
        try {
          const response = await emailjs.sendForm(serviceID, templateID, this);
          if (response.status === 200) {
            Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');
            registrationForm.reset();
          } else {
            Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
          }
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
          Swal.fire('Error', 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente más tarde.', 'error');
        }
      });
    }
  });
  
  // Función para verificar si el email ya existe en LocalStorage
  function existeEmailEnLocalStorage(email) {
    const contactosGuardados = obtenerContactosLocalStorage();
    return contactosGuardados.some(contacto => contacto.email === email);
  }
  
  // Función para guardar el contacto en LocalStorage
  function guardarEnLocalStorage(nombre, email, telefono, comentario) {
    const nuevoContacto = { nombre, email, telefono, comentario };
    const contactosGuardados = obtenerContactosLocalStorage();
    contactosGuardados.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contactosGuardados));
  }
  
  // Función para obtener los contactos almacenados en LocalStorage
  function obtenerContactosLocalStorage() {
    const contactosJSON = localStorage.getItem("contactos");
    return contactosJSON ? JSON.parse(contactosJSON) : [];
  }
  
  
  