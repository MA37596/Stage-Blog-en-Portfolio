<?php
include_once("../source/database.php");
$connection = database_connect();

$query = "SELECT afspraak_id, datum, tijdslot, klantnaam FROM agsafspraken";
$result = $connection->query($query);

$events = [];
while ($row = $result->fetch_assoc()) {
    $events[] = [
        'id' => $row['afspraak_id'],
        'title' => $row['klantnaam'],
        'start' => $row['datum'] . 'T' . $row['tijdslot']
    ];
}

header('Content-Type: application/json');
echo json_encode($events);
?>
