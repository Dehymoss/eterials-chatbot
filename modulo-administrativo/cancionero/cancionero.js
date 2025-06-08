document.getElementById('form-cancionero').onsubmit = function(e) {
    e.preventDefault();
    const cancion = this.cancion.value;
    const artista = this.artista.value;
    const li = document.createElement('li');
    li.textContent = `${cancion} - ${artista}`;
    document.getElementById('lista-canciones').appendChild(li);
    this.reset();
};