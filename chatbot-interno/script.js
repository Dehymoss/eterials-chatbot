function obtenerSaludo() {
    let hora = new Date().getHours();
    if (hora >= 6 && hora < 12) return "Buenos días";
    if (hora >= 12 && hora < 18) return "Buenas tardes";
    return "Buenas noches";
}

function mostrarSaludo() {
    let saludo = obtenerSaludo();
    let numeroMesa = new URLSearchParams(window.location.search).get("mesa") || "Sin número";
    let nombreCliente = sessionStorage.getItem("nombreCliente") || "Invitado";
    let mensaje = `<span class="saludo-destacado">${saludo} 👋</span><br>
    <span class="saludo-mensaje">
        ¡Bienvenido${nombreCliente !== "Invitado" ? `, <b>${nombreCliente}</b>` : ""}!<br>
        Es un placer atenderte en la mesa <b>${numeroMesa}</b>.<br>
        Si necesitas algo, ¡aquí estoy para ayudarte!
    </span>`;
    if (nombreCliente !== "Invitado") {
        document.getElementById("nombre-container").style.display = "none";
    } else {
        document.getElementById("nombre-container").style.display = "block";
    }
    document.getElementById("saludo").innerHTML = mensaje;
}

function guardarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        sessionStorage.setItem("nombreCliente", nombre);
        mostrarSaludo();
        alert(`¡Gracias, ${nombre}! Ahora te llamaremos por tu nombre.`);
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// --- Inactividad: cerrar sesión tras 10 minutos (600000 ms) ---
let inactividadTimeout;
function resetInactividad() {
    clearTimeout(inactividadTimeout);
    inactividadTimeout = setTimeout(() => {
        sessionStorage.clear();
        location.reload();
    }, 600000); // 10 minutos
}
["click", "mousemove", "keydown", "scroll", "touchstart"].forEach(evt =>
    document.addEventListener(evt, resetInactividad)
);

// Estrellas de calificación
document.addEventListener('DOMContentLoaded', function () {
    mostrarSaludo();
    resetInactividad();

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