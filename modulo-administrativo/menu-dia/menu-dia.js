document.getElementById('form-menu-dia').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('guardar-menu.php', {
        method: 'POST',
        body: formData
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