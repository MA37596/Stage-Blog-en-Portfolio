<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit;
}
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

    <link rel="stylesheet" href="dashboard.css">
    <title>AGS Admin Paneel</title>
</head>

<body>
    <div class="container">
        <div class="topbar">
            <div class="logo">
                <h2>AGS Admin Paneel</h2>
            </div>
            <div class="search">
            </div>
            </div>
        </div>
        <div class="sidebar">
            <ul>
                <li>
                    <a href="adminpaneel.php">
                        <i class="fa fa-dashboard"></i>
                        <div>Overzicht</div>
                    </a>
                </li>
                <li>
                    <a href="adminafspraken.php">
                        <i class=""></i>
                        <div>Afspraken</div>
                    </a>
                </li>
                <li>
                    <a href="adminprintrooster.php">
                        <i class=""></i>
                        <div>Admin Printrooster</div>
                    </a>
                </li>
                <li>
                    <a href="logout.php">
                        <i class=""></i> <i class="fa fa-sign-out"></i>
             <div>Log uit</div> 
                    </a>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="cards">
                <div class="card">
                    <div class="card-content">
                        <div class="number">5</div>
                        <div class="card-name">Admins</div>
                    </div>
                    <div class="icon-box">
                        <i class="fas fa-users"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                    <div class="number">∞</div>
                        <div class="card-name">Huidige Saldo</div>
                    </div>
                    <div class="icon-box">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="number">8</div>
                        <div class="card-name">Leerlingen</div>
                    </div>
                    <div class="icon-box">
                        <i class="fas fa-users"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="number"></div>
                        <div class="card-name">User: <?php echo $_SESSION['username']; ?></div>
                    </div>
                    <div class="icon-box">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
            <div class="charts">
                <div class="chart">
                    <h2>Aantal Printjes in de maand  (Afgelopen 12 maanden)</h2>
                    <div>
                        <canvas id="lineChart"></canvas>
                    </div>
                </div>
                <div class="chart doughnut-chart">
                    <h2>Meest Gebruikte papier soort</h2>
                    <div>
                        <canvas id="doughnut"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    <script src="/js/chart1.js"></script>
    <script src="/js/chart2.js"></script>
</body>
</html>