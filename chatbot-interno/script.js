function obtenerSaludo() {
    let hora = new Date().getHours();
    if (hora >= 6 && hora < 12) return "Buenos días";
    if (hora >= 12 && hora < 18) return "Buenas tardes";
    return "Buenas noches";
}
function mostrarSaludo() {
    let saludo = obtenerSaludo();
    let numeroMesa = new URLSearchParams(window.location.search).get("mesa") || "Sin número";
    let nombreCliente = localStorage.getItem("nombreCliente") || "Invitado";
    let mensaje = `${saludo}, bienvenido. Soy tu asistente para la mesa ${numeroMesa}.`;
    if (nombreCliente !== "Invitado") {
        mensaje += ` ¡Qué gusto verte, ${nombreCliente}!`;
    }
    document.getElementById("saludo").innerHTML = mensaje;
}
function guardarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        localStorage.setItem("nombreCliente", nombre);
        mostrarSaludo();
        alert(`¡Gracias, ${nombre}! Ahora te llamaremos por tu nombre.`);
        document.getElementById("nombre-container").style.display = "none";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
// Estrellas de calificación
document.addEventListener('DOMContentLoaded', function () {
    mostrarSaludo();
    const estrellas = document.querySelectorAll('.estrella');
    let calificacionSeleccionada = 0;

    estrellas.forEach(estrella => {
        estrella.addEventListener('mouseenter', function () {
            pintarEstrellas(this.dataset.valor);
        });
        estrella.addEventListener('mouseleave', function () {
            pintarEstrellas(calificacionSeleccionada);
        });
        estrella.addEventListener('click', function () {
            calificacionSeleccionada = this.dataset.valor;
            pintarEstrellas(calificacionSeleccionada);
        });
    });

    function pintarEstrellas(valor) {
        estrellas.forEach(estrella => {
            if (estrella.dataset.valor <= valor) {
                estrella.classList.add('seleccionada');
            } else {
                estrella.classList.remove('seleccionada');
            }
        });
    }

    window.enviarCalificacion = function () {
        if (calificacionSeleccionada > 0) {
            alert(`¡Gracias por tu calificación de ${calificacionSeleccionada} estrella(s)!`);
        } else {
            alert('Por favor, selecciona una calificación.');
        }
    }
});