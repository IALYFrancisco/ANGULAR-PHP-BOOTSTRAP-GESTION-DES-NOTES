<?php

// Autoriser l'accès depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");

// Autoriser les méthodes de requête spécifiques
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Autoriser les en-têtes spécifiques
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Indiquer que les cookies peuvent être inclus dans la demande
header("Access-Control-Allow-Credentials: true");

header("Access-Control-Allow-Origin: http://localhost:4200");

// Assurez-vous d'ajuster ces informations en fonction de votre configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestion_notes";

// Créez une connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Récupérez les données du formulaire
$data = json_decode(file_get_contents("php://input"), true); // true pour obtenir un tableau associatif

if (!empty($data['numeroEtudiant']) && !empty($data['nomEtudiant']) && !empty($data['niveauEtudiant'])) {
    // Échapper les données pour éviter les injections SQL (utilisation de stmt)
    $numeroEtudiant = $conn->real_escape_string($data['numeroEtudiant']);
    $nomEtudiant = $conn->real_escape_string($data['nomEtudiant']);
    $niveauEtudiant = $conn->real_escape_string($data['niveauEtudiant']);

    // Requête SQL pour ajouter les données dans la table
    // Ajoutez les données à la table de la base de données
    $sql = "INSERT INTO etudiant (num_et, nom, niveau) VALUES ('$numeroEtudiant', '$nomEtudiant', '$niveauEtudiant')";


    if ($conn->query($sql) === TRUE) {
        // Succès
        echo json_encode(["success" => true, "message" => "Data inserted successfully"]);
    } else {
        // Erreur lors de l'ajout dans la base de données
        echo json_encode(["error" => true, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
} else {
    // Données manquantes ou invalides
    echo json_encode(["error" => true, "message" => "Invalid data"]);
}

// Fermeture de la connexion à la base de données
$conn->close();

// if ($conn->query($sql) === TRUE) {
//     echo "Data inserted successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// // Fermez la connexion à la base de données
// $conn->close();
?>
