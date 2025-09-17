<?php
include_once("../source/database.php");
$connection = database_connect();

if (isset($_POST['id'])) {
    $id = $_POST['id'];

    $stmt = $connection->prepare("DELETE FROM agsafspraken WHERE afspraak_id = ?");
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        echo "Afspraak succesvol geannuleerd.";
    } else {
        echo "Fout bij annuleren.";
    }
} else {
    echo "Geen ID ontvangen.";
}
?>
