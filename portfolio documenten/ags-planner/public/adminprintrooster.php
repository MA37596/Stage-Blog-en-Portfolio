<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit;
}

include_once("../source/database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Printrooster</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar/main.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #kalender {
            max-width: 900px;
            margin: 50px auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <h2 style="text-align: center;">Printrooster</h2>
    <div id="kalender"></div>

    <script src="https://cdn.jsdelivr.net/npm/fullcalendar/main.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('kalender');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth', // Maandweergave
                events: 'load_afspraken.php', // Laadt de afspraken van de server
                editable: false, // Zorgt ervoor dat afspraken niet aanpasbaar zijn
                selectable: false, // Geen selectie mogelijk
                eventClick: false, // Event-klikken uitgeschakeld
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }
            });

            calendar.render();
        });
    </script>
</body>
</html>
