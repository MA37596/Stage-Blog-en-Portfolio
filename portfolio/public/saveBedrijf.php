<?php
// saveBedrijf.php

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $file = 'stagebedrijven.json';

    $existingData = [];
    if (file_exists($file)) {
        $jsonContent = file_get_contents($file);
        if ($jsonContent) {
            $existingData = json_decode($jsonContent, true);
            if (!is_array($existingData)) {
                $existingData = [];
            }
        }
    }

    // voegt data toe
    $existingData[] = $data;

    // Schrijft de infoormatie in json en encode hem
    if (file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT))) {
        http_response_code(200);
        echo json_encode(['message' => 'Bedrijf succesvol opgeslagen!']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Fout bij opslaan bestand']);
    }
} else {
    http_response_code(400);
    echo json_encode(['message' => 'Ongeldige data']);
}
?>
