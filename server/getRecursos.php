<?php
include 'lib.php';

$api = new geBanco();

if (isset($_POST['id_recurso'])) {
    $json = $api->getRecursos($_POST['id_recurso']);
} else {
    $json = "No se recibieron los datos adecuados";
}

echo json_encode($json);
