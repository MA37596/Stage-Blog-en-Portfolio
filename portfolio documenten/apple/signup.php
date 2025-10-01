<?php
// Database connectie
$host = 'localhost';
$db   = 'webshop';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formulier data ophalen
    $firstName = trim($_POST['firstName']);
    $lastName = trim($_POST['lastName']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    // Validatie
    if ($password !== $confirmPassword) {
        $message = '<div class="error-message">Wachtwoorden komen niet overeen</div>';
    } elseif (strlen($password) < 8) {
        $message = '<div class="error-message">Wachtwoord moet minimaal 8 karakters bevatten</div>';
    } else {
        try {
            $pdo = new PDO($dsn, $user, $pass, $options);

            // Check of email al bestaat
            $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
            $stmt->execute([$email]);
            if ($stmt->fetch()) {
                $message = '<div class="error-message">E-mailadres is al geregistreerd</div>';
            } else {
                // Hash het wachtwoord
                $passwordHash = password_hash($password, PASSWORD_DEFAULT);

                // Voeg gebruiker toe
                $stmt = $pdo->prepare("INSERT INTO users (first_name, last_name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$firstName, $lastName, $email, $phone, $passwordHash]);
                $message = '<div class="success-message">Account succesvol aangemaakt! Je wordt doorgestuurd...</div>';
                header("refresh:2;url=signin.php");
            }
        } catch (PDOException $e) {
            $message = '<div class="error-message">Database fout: ' . htmlspecialchars($e->getMessage()) . '</div>';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registreren - Apple Store</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        body {
            font-family: 'Jost', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
        }

        .signup-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 50px;
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            width: 100%;
            max-width: 450px;
            position: relative;
            overflow: hidden;
        }

        .signup-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #007AFF, #34C759, #FF9500, #FF3B30);
        }

        .logo {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo-img-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
        }

        .logo-img-wrap img {
            width: 60px;
            height: 60px;
            object-fit: contain;
            display: block;
        }

        .logo h1 {
            color: #1d1d1f;
            font-size: 28px;
            font-weight: 600;
            margin: 0;
            letter-spacing: -0.5px;
        }

        .logo p {
            color: #6e6e73;
            font-size: 16px;
            margin: 5px 0 0 0;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            color: #1d1d1f;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
            letter-spacing: 0.5px;
        }

        .form-group input {
            width: 100%;
            padding: 16px 20px;
            border: 2px solid #e5e5e7;
            border-radius: 12px;
            font-size: 16px;
            font-family: 'Jost', sans-serif;
            background: #fbfbfd;
            transition: all 0.3s ease;
            box-sizing: border-box;
        }

        .form-group input:focus {
            outline: none;
            border-color: #007AFF;
            background: white;
            box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
        }

        .form-group input::placeholder {
            color: #8e8e93;
        }

        .password-field {
            position: relative;
        }

        .password-toggle {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #8e8e93;
            cursor: pointer;
            font-size: 18px;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .password-toggle:hover {
            color: #007AFF;
        }

        .terms {
            margin-bottom: 30px;
            font-size: 13px;
            color: #6e6e73;
            line-height: 1.5;
        }

        .terms a {
            color: #007AFF;
            text-decoration: none;
        }

        .terms a:hover {
            text-decoration: underline;
        }

        .signup-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(135deg, #007AFF, #0056CC);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Jost', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 0.5px;
            position: relative;
            overflow: hidden;
        }

        .signup-btn:hover {
            background: linear-gradient(135deg, #0056CC, #004BB5);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
        }

        .signup-btn:active {
            transform: translateY(0);
        }

        .divider {
            text-align: center;
            margin: 30px 0;
            position: relative;
            color: #8e8e93;
            font-size: 14px;
        }

        .divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: #e5e5e7;
            z-index: 1;
        }

        .divider span {
            background: rgba(255, 255, 255, 0.95);
            padding: 0 20px;
            position: relative;
            z-index: 2;
        }

        .login-link {
            text-align: center;
            font-size: 14px;
            color: #6e6e73;
        }

        .login-link a {
            color: #007AFF;
            text-decoration: none;
            font-weight: 500;
        }

        .login-link a:hover {
            text-decoration: underline;
        }

        .error-message {
            background: #ffebee;
            color: #c62828;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            margin-bottom: 20px;
            border-left: 4px solid #ff3b30;
        }

        .success-message {
            background: #e8f5e8;
            color: #2e7d32;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            margin-bottom: 20px;
            border-left: 4px solid #34c759;
        }

        @media (max-width: 480px) {
            .signup-container {
                padding: 30px 25px;
                margin: 10px;
            }
            
            .logo h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="signup-container">
        <div class="logo">
            <div class="logo-img-wrap">
                <img src="file-apple-logo-black-svg-wikimedia-commons-1.png" alt="Apple Logo">
            </div>
            <h1>Registreren</h1>
            <p>Maak je Apple Store account aan</p>
        </div>
        <?php echo $message; ?>
        <form id="signupForm" method="POST" autocomplete="off">
            <div class="form-group">
                <label for="firstName">Voornaam</label>
                <input type="text" id="firstName" name="firstName" placeholder="Je voornaam" required>
            </div>
            <div class="form-group">
                <label for="lastName">Achternaam</label>
                <input type="text" id="lastName" name="lastName" placeholder="Je achternaam" required>
            </div>
            <div class="form-group">
                <label for="email">E-mailadres</label>
                <input type="email" id="email" name="email" placeholder="naam@voorbeeld.com" required>
            </div>
            <div class="form-group">
                <label for="phone">Telefoonnummer</label>
                <input type="tel" id="phone" name="phone" placeholder="+31 6 12345678" required>
            </div>
            <div class="form-group">
                <label for="password">Wachtwoord</label>
                <div class="password-field">
                    <input type="password" id="password" name="password" placeholder="Minimaal 8 karakters" required>
                    <button type="button" class="password-toggle" onclick="togglePassword()">
                        <span id="toggleIcon">👁️</span>
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Bevestig wachtwoord</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Herhaal je wachtwoord" required>
            </div>
            <div class="terms">
                Door te registreren ga je akkoord met onze 
                <a href="algemene-voorwaarden.html" target="_blank">Algemene Voorwaarden</a> 
                en 
                <a href="privacybeleid.html" target="_blank">Privacybeleid</a>.
                We kunnen je e-mails sturen over nieuwe producten en aanbiedingen.
            </div>
            <button type="submit" class="signup-btn">
                Account aanmaken
            </button>
            <div class="divider">
                <span>of</span>
            </div>
            <div class="login-link">
                Al een account? <a href="signin.php">Inloggen</a>
            </div>
        </form>
    </div>
    <script>
        function togglePassword() {
            const passwordField = document.getElementById('password');
            const toggleIcon = document.getElementById('toggleIcon');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggleIcon.textContent = '🙈';
            } else {
                passwordField.type = 'password';
                toggleIcon.textContent = '👁️';
            }
        }
    </script>
</body>

</html>
