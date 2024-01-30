<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");

    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'gestion_notes';

    $connexion = mysqli_connect($host, $user, $password, $database);

    if($connexion){
        $SQL = "SELECT * FROM notes";
        $resultat = mysqli_query($connexion, $SQL);
        
        $all_note = $resultat->fetch_all();

        echo json_encode($all_note);
    }else{
        echo "Echèc de la connexion à  la base de données!";
    }
 
?>