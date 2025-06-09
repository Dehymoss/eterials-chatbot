document.getElementById('form-menu-dia').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        sopa: this.sopa.value,
        plato: this.plato.value,
        bebida: this.bebida.value,
        postre: this.postre.value
    };

    fetch('https://script.google.com/macros/s/AKfycbxfrS8_exUHSrmYNFxhFkk4u6FzHtejY1m5UA5Ba3Xe4Bs2iEjKqw0yYaS8VJvzqKA/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.ok ? response.text() : Promise.reject('Error en la respuesta'))
    .then(data => {
        // Mostrar mensaje de éxito
        document.getElementById('mensaje-guardado').style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensaje-guardado').style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        alert('Error al guardar el menú. Intenta de nuevo.');
    });
});