<?php
include_once("../source/database.php");
$connection = database_connect();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $datum = $_POST['datum'];
    $tijdslot = $_POST['tijdslot'];
    $klantnaam = $_POST['klantnaam'];
    $printsoort = $_POST['printsoort'];
    $aantal = $_POST['aantal'];
    $kosten = $aantal * 0.10;

   
    $stmt = $connection->prepare("SELECT COUNT(*) FROM agsafspraken WHERE datum = ? AND tijdslot = ?");
    $stmt->bind_param("ss", $datum, $tijdslot);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close();

    if ($count >= 3) {
        echo "Er zijn al 3 afspraken voor dit tijdslot.";
        exit;
    }


    $stmt = $connection->prepare("INSERT INTO agsafspraken (datum, tijdslot, klantnaam, printsoort, aantal, kosten) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssdi", $datum, $tijdslot, $klantnaam, $printsoort, $aantal, $kosten);
    if ($stmt->execute()) {
        header("Location: dashboard.php");
        exit;
    } else {
        echo "Fout bij het toevoegen van de afspraak.";
    }
}
?>
