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
} catch(PDOException $e) {
    // Toon een gebruiksvriendelijke foutmelding in productie
    if ($env['APP_DEBUG'] == 'true') {
        echo "Connection failed: " . $e->getMessage();
    } else {
        echo "Er is een probleem met de database verbinding. Probeer het later opnieuw.";
    }
    exit();
}

// Haal spellen op uit de database
$sql = "SELECT * FROM games";
$stmt = $conn->prepare($sql);
$stmt->execute();
$games = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Haal categorieën op
$sql = "SELECT DISTINCT category FROM games";
$stmt = $conn->prepare($sql);
$stmt->execute();
$categories = $stmt->fetchAll(PDO::FETCH_COLUMN);
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title><?php echo htmlspecialchars($env['APP_NAME']); ?> - Alle Spellen</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="script.js"></script>
</head>

<body>
    <header>
        <div class="logo"><?php echo htmlspecialchars($env['APP_NAME']); ?></div>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="games.php" class="active">Spellen</a></li>
                <li><a href="promotions.php">Promoties</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
        </nav>
        <div class="auth-buttons">
            <button class="login-btn">Inloggen</button>
            <button class="register-btn">Registreren</button>
        </div>
    </header>

    <main>
        <section class="games-header">
            <h1>Ontdek Onze Spellen</h1>
            <p>Kies uit ons uitgebreide aanbod van spannende spellen</p>
            <div class="search-filter">
                <input type="text" placeholder="Zoek een spel...">
                <select>
                    <option value="">Alle Categorieën</option>
                    <?php foreach($categories as $category): ?>
                        <option value="<?php echo htmlspecialchars($category); ?>">
                            <?php echo htmlspecialchars($category); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
        </section>

        <section class="games-grid">
            <div class="games-container">
                <?php foreach($games as $game): ?>
                    <div class="game-card" data-game="<?php echo htmlspecialchars($game['id']); ?>">
                        <div class="game-icon"><?php echo htmlspecialchars($game['icon']); ?></div>
                        <h3><?php echo htmlspecialchars($game['name']); ?></h3>
                        <p><?php echo htmlspecialchars($game['description']); ?></p>
                        <div class="game-stats">
                            <span>🎯 <?php echo htmlspecialchars($game['rtp']); ?>% RTP</span>
                            <span>⭐ <?php echo htmlspecialchars($game['rating']); ?>/5</span>
                        </div>
                        <button class="play-button" onclick="window.location.href='play.php?id=<?php echo $game['id']; ?>'">Speel Nu</button>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Over <?php echo htmlspecialchars($env['APP_NAME']); ?></h3>
                <p>Jouw vertrouwde online casino sinds 2024</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>Email: support@<?php echo strtolower(htmlspecialchars($env['APP_NAME'])); ?>.nl</p>
                <p>Telefoon: +31 20 123 4567</p>
            </div>
            <div class="footer-section">
                <h3>Volg Ons</h3>
                <div class="social-links">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 <?php echo htmlspecialchars($env['APP_NAME']); ?>. Alle rechten voorbehouden.</p>
            <p>Speel met mate. 18+ alleen.</p>
            <div class="payment-methods">
                <span>💳</span>
                <span>🏦</span>
                <span>💰</span>
            </div>
        </div>
    </footer>
</body>
</html> 