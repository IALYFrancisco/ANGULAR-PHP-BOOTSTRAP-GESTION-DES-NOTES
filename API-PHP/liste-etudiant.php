<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");

    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'gestion_notes';

    $connexion = mysqli_connect($host, $user, $password, $database);

    if($connexion){
        $SQL = "SELECT * FROM etudiant";
        $resultat = mysqli_query($connexion, $SQL);
        
        $all = $resultat->fetch_all();

        echo json_encode($all);
    }else{
        echo "Echèc de la connexion à  la base de données!";
    }

?>