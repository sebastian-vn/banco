<?php

    function executeQuery($con, $sql){
        $result = $con->query($sql);
        if($result){
            $data = array();
            while($row = $result->fetch(PDO::FETCH_ASSOC)){
                array_push($data, $row);
            }
            return $data;
        }else{
            return $con->errorInfo()[2];
        }
    }

    function getDocumentos(){
        
    }
?>