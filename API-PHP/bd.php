<?php

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'gestion_notes';

$connexion = mysqli_connect($host, $user,$password, $database);

if($connexion){
    echo "Connexion à la base de données réussie";
}else{
    echo "Echèc de laconnexion à la base de données ".$database;
}


?>