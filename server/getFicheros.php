<?php
include 'lib.php';

$api = new geBanco();

if (isset($_POST['competencia'], $_POST['tema'], $_POST['zona'])) {
    $json = $api->getFicheros($_POST['competencia'], $_POST['tema'], $_POST['zona']);
} else {
    $json = "No se recibieron los datos adecuados";
}

echo json_encode($json);
