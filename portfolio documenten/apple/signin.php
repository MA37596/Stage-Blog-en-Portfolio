<?php
session_start();

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
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    // Server-side validatie
    if ($email === '' || $password === '') {
        $message = '<div class="error-message">Vul alle velden in</div>';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = '<div class="error-message">Ongeldig e-mailadres</div>';
    } else {
        try {
            $pdo = new PDO($dsn, $user, $pass, $options);

            // Zoek gebruiker op basis van e-mail
            $stmt = $pdo->prepare("SELECT id, first_name, password_hash FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch();

            // Controleer of gebruiker bestaat en wachtwoord klopt
            if ($user && password_verify($password, $user['password_hash'])) {
                session_regenerate_id(true);
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['first_name'] = $user['first_name'];

                header("Location: index.php");
                exit;
            } else {
                $message = '<div class="error-message">Ongeldige e-mail of wachtwoord</div>';
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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Inloggen - Apple Store</title>
    <link rel="stylesheet" href="assets/css/style.css" />
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

        .login-btn {
            background: linear-gradient(135deg, #34C759, #007AFF);
            font-size: 18px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .login-btn span {
            font-size: 20px;
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
            font-size: 15px;
            color: #143150ff;
            margin-top: 18px;
        }

        .login-link a {
            color: #143150ff;
            text-decoration: none;
            font-weight: 600;
            padding-left: 4px;
            transition: color 0.2s;
        }

        .login-link a:hover {
            color: #0056CC;
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
            <h1>Welkom terug</h1>
            <p>Log in bij Apple Store</p>
        </div>
        <?php echo $message; ?>
        <form id="signinForm" method="POST" autocomplete="off">
            <div class="form-group">
                <label for="email">E-mailadres</label>
                <input type="email" id="email" name="email" placeholder="naam@voorbeeld.com" required />
            </div>

            <div class="form-group">
                <label for="password">Wachtwoord</label>
                <div class="password-field">
                    <input type="password" id="password" name="password" placeholder="Je wachtwoord" required />
                    <button type="button" class="password-toggle" onclick="togglePassword()">
                        <span id="toggleIcon">👁️</span>
                    </button>
                </div>
            </div>

            <div class="remember-forgot">
                <div class="remember-me">
                </div>
                <a href="#" class="forgot-password">Wachtwoord vergeten?</a>
            </div>

            <button type="submit" class="signup-btn login-btn">
                <span>🔒</span> Inloggen
            </button>        

            <div class="login-link">
                Nog geen account? <a href="signup.php">Account aanmaken</a>
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

        document.getElementById('signinForm').addEventListener('submit', function(e) {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            if (!email || !password) {
                e.preventDefault();
                showMessage('Vul alle velden in', 'error');
            } else if (!validateEmail(email)) {
                e.preventDefault();
                showMessage('Ongeldig e-mailadres', 'error');
            }
            // Bij geldige invoer wordt formulier gewoon verzonden
        });

        function showMessage(message, type) {
            const existingMessage = document.querySelector('.error-message, .success-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            const messageDiv = document.createElement('div');
            messageDiv.className = type === 'error' ? 'error-message' : 'success-message';
            messageDiv.textContent = message;

            const form = document.getElementById('signinForm');
            form.insertBefore(messageDiv, form.firstChild);
        }

        function validateEmail(email) {
            // Eenvoudige e-mail validatie regex
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email.toLowerCase());
        }
    </script>
</body>
</html>
