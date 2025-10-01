<?php

$host    = '127.0.0.1:3306';
$port    = '3306';
$db      = 'c9828aps1';
$user    = 'c9828aps1';
$pass    = 'E9b53a701e1da92a';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Fouten als exceptions
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Associative array fetch
    PDO::ATTR_EMULATE_PREPARES   => false,                  // Native prepared statements
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Database verbinding mislukt: " . $e->getMessage());
}