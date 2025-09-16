<?php
include_once("../source/database.php");

$connection = database_connect();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password)) {
        $query = "SELECT * FROM admin WHERE username = ?";
        $stmt = $connection->prepare($query);
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            
            //if (password_verify($password, $user['password'])) {
              if ($password === $user['password']) {
                session_start();
                $_SESSION['id'] = $user['id'];
                $_SESSION['username'] = $user['username'];

                header('Location: adminpaneel.php');
                exit();
            } else {
                $error_message = "Ongeldige gebruikersnaam of wachtwoord.";
            }
        } else {
            $error_message = "Ongeldige gebruikersnaam of wachtwoord.";
        }
    } else {
        $error_message = "Vul zowel gebruikersnaam als wachtwoord in.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AGS Login</title>
  <link rel="stylesheet" href="style.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
  <div class="wrapper">
    <form action="docenten.php" method="POST">
      <h1>Login Voor docenten</h1>
      <?php
      if (isset($error_message)) {
          echo "<div class='error'>$error_message</div>";
      }
      ?>
      <div class="input-box">
        <input type="text" name="username" placeholder="Gebruikersnaam" required>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" name="password" placeholder="Wachtwoord" required>
        <i class='bx bxs-lock-alt'></i>
      </div>
      <div class="remember-forgot"> 
        <label><input type="checkbox">Onthou me</label>
        <a href="index.php">Login voor studenten</a>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</body>
</html>






















