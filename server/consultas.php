<?php

function executeQuery($con, $sql)
{
  $result = $con->query($sql);
  if ($result) {
    $data = array();
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
      array_push($data, $row);
    }
    return $data;
  }else {
    return $con->errorInfo()[2];
  }
}

function getRecursosQuery($con, $id_recurso)
{
  $sql = "SELECT id_archivo, CONCAT(rec.recurso_url,'/',nombre_archivo)
  FROM archivos_recursos ar
  JOIN recursos rec ON rec.id_recurso = ar.id_recurso
  WHERE rec.id_recurso = $id_recurso";

  return executeQuery($con, $sql);
}
