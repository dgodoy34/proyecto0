
// Inicializar emailjs 

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
  