document.getElementById("repair-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Limpia el formulario
    this.reset();

    // Muestra el mensaje de confirmación
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.classList.remove("hidden");
});

// Oculta el mensaje de confirmación al hacer clic en "Cerrar"
document.getElementById("close-message").addEventListener("click", function() {
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.classList.add("hidden");
});
