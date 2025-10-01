<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <title>Contact | Apple Store</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        body {
            font-family: 'Jost', sans-serif;
            background: #f7f7f7;
            margin: 0;
            padding: 0;
        }

        .contact-container {
            max-width: 480px;
            margin: 60px auto;
            background: #fff;
            padding: 40px 32px;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        h1 {
            color: #1d1d1f;
            font-size: 2rem;
            margin-bottom: 24px;
            text-align: center;
        }

        .form-group {
            margin-bottom: 18px;
        }

        .form-group label {
            display: block;
            color: #1d1d1f;
            font-size: 1rem;
            margin-bottom: 6px;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1.5px solid #e5e5e7;
            border-radius: 8px;
            font-size: 1rem;
            background: #fbfbfd;
            resize: vertical;
        }

        .form-group textarea {
            min-height: 80px;
        }

        .contact-btn {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #007AFF, #34C759);
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 12px;
            box-shadow: 0 2px 8px rgba(0, 122, 255, 0.10);
            transition: background 0.2s;
        }

        .contact-btn:hover {
            background: linear-gradient(135deg, #0056CC, #34C759);
        }

        .success-message,
        .error-message {
            margin-bottom: 18px;
            padding: 12px;
            border-radius: 8px;
            font-size: 1rem;
            text-align: center;
        }

        .success-message {
            background: #e8f5e8;
            color: #2e7d32;
            border-left: 4px solid #34c759;
        }

        .error-message {
            background: #ffebee;
            color: #c62828;
            border-left: 4px solid #ff3b30;
        }
    </style>
</head>

<body>
    <div class="contact-container">
        <h1>Contact</h1>
        <!-- Toon hier een succes- of foutmelding indien gewenst -->
        <form method="post" action="">
            <div class="form-group">
                <label for="name">Naam</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">E-mailadres</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Bericht</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="contact-btn">Versturen</button>
        </form>
    </div>
</body>

</html>