// Cargar el HTML del menú en el contenedor principal
function cargarMenuSelector() {
    fetch('menu/menu-selector.html')
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);

            // Evento para cerrar el modal
            document.getElementById('cerrar-menu-selector').onclick = function() {
                document.getElementById('menu-selector-modal').classList.remove('activo');
            };
        });
}

// Mostrar el modal al hacer clic en el botón del chatbot
document.getElementById('boton-menu-chatbot').onclick = function() {
    document.getElementById('menu-selector-modal').classList.add('activo');
};

// Evento para abrir el Menú del día
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'btn-menu-dia') {
        fetch('menu/menu-dia.json')
            .then(res => res.json())
            .then(data => {
                // Elimina si ya existe
                let existente = document.getElementById('menu-dia-modal');
                if (existente) existente.remove();

                // Construye el HTML dinámicamente
                const html = `
                <div id="menu-dia-modal" class="menu-dia-modal">
                  <div class="menu-dia-contenido">
                    <button class="cerrar-menu-dia" id="cerrar-menu-dia">&times;</button>
                    <h3>Menú del día</h3>
                    <ul>
                      <li>Sopa del día: <b>${data.sopa}</b></li>
                      <li>Plato fuerte: <b>${data.plato}</b></li>
                      <li>Bebida: <b>${data.bebida}</b></li>
                      <li>Postre: <b>${data.postre}</b></li>
                    </ul>
                  </div>
                </div>
                `;
                document.body.insertAdjacentHTML('beforeend', html);

                // Evento para cerrar el modal del menú del día
                document.getElementById('cerrar-menu-dia').onclick = function() {
                    document.getElementById('menu-dia-modal').remove();
                };
            });
    }
});