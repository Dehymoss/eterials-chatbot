<?php
// filepath: c:\Users\holgu\OneDrive\Documentos\GitHub\modulo-administrativo\menu-dia\guardar-menu.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sopa = $_POST['sopa'] ?? '';
    $plato = $_POST['plato'] ?? '';
    $bebida = $_POST['bebida'] ?? '';
    $postre = $_POST['postre'] ?? '';

    $contenido = "Sopa: $sopa\nPlato: $plato\nBebida: $bebida\nPostre: $postre\n---\n";
    file_put_contents('menu-dia.txt', $contenido, FILE_APPEND);

    echo "Guardado correctamente";
} else {
    http_response_code(405);
    echo "Método no permitido";
}
?>