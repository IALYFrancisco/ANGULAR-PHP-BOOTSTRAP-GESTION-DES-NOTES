<?php

    header('Access-Control-Allow-Origin: localhost:4200');
    header('Allow-Control-Access-Methodes: DELETE');

    $methode = $_SERVER['REQUEST_METHOD'];

    if( $methode !="DELETE" && $methode !="OPTIONS"){
        exit('Seule la méthode DELETE est autorisée');
    }

    if(empty($_GET['num_et'])){
        exit('L\'id du tuple à supprimer est introuvable');
    }

    $num_et = $_GET['num_et'];
    $bd = include_once '../bd.php';
    $sentencia = $bd -> prepare('DELETE FROM etudiant WHERE num_et = ?');
    $resultat = $sentencia -> execute([$num_et]);

    echo json_encode($resultat);

?>