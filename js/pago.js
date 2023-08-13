document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const cardNumber = document.getElementById('card-number').value;
        const cardName = document.getElementById('card-name').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Simulando un proceso de pago exitoso
        setTimeout(function () {
            Swal.fire({
                title: '¡Pago exitoso!',
                text: 'Se ha realizado el pago con éxito.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a una página de confirmación u otra acción
                    window.location.href = '../index.html';
                }
            });
        }, 1500); // Simulación de tiempo de proceso
    });
});
