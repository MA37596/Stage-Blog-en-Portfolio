<?php
// Laad environment variabelen
$env = parse_ini_file('.env');

// Database connectie
$servername = $env['DB_HOST'];
$username = $env['DB_USERNAME'];
$password = $env['DB_PASSWORD'];
$dbname = $env['DB_DATABASE'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Database connectie succesvol!";
    
    // Test of we tabellen kunnen lezen
    $stmt = $conn->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo "<br><br>Beschikbare tabellen:";
    echo "<ul>";
    foreach($tables as $table) {
        echo "<li>" . htmlspecialchars($table) . "</li>";
    }
    echo "</ul>";
    
} catch(PDOException $e) {
    echo "Database connectie mislukt: " . $e->getMessage();
}
?> 