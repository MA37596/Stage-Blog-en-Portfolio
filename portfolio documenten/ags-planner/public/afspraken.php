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
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar/main.min.css">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
        }

        h2 {
            text-align: center;
            margin: 20px 0;
            color: #333;
        }

        #kalender {
            max-width: 900px;
            margin: 30px auto;
            padding: 10px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .booking-form {
            background-color: #ffffff;
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            max-width: 450px;
            margin: 0 auto;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            font-family: 'Arial', sans-serif;
        }

        .booking-form h3 {
            text-align: center;
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        .booking-form input,
        .booking-form select,
        .booking-form button {
            display: block;
            width: 100%;
            margin-bottom: 15px;
            padding: 12px 15px;
            font-size: 16px;
            border: 1px solid #dcdcdc;
            border-radius: 8px;
            background-color: #f9f9f9;
            transition: all 0.3s ease;
        }

        .booking-form input:focus,
        .booking-form select:focus {
            outline: none;
            border-color: #007BFF;
            background-color: #ffffff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
        }

        .booking-form select {
            cursor: pointer;
        }

        .booking-form label {
            margin-bottom: 8px;
            display: block;
            font-size: 14px;
            color: #555;
            font-weight: 500;
        }

        .buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .booking-form button {
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            padding: 12px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .booking-form button[type="submit"] {
            background-color: #34eb37;
            color: #ffffff;
        }

        .booking-form button[type="submit"]:hover {
            background-color: #34eb37;
            transform: translateY(-2px);
        }

        .booking-form button[type="button"] {
            background-color: #f44336;
            color: #ffffff;
        }

        .booking-form button[type="button"]:hover {
            background-color: #d32f2f;
            transform: translateY(-2px);
        }

        .form-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
    </style>
</head>
<body>
    <h2>Dashboard: Printafspraken</h2>
    <div id="kalender"></div>

    <script src="https://cdn.jsdelivr.net/npm/fullcalendar/main.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('kalender');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: 'load_afspraken.php',
                dateClick: function (info) {
                    openBookingForm(info.dateStr);
                },
                eventClick: function (info) {
                    if (confirm("Wil je deze afspraak annuleren?")) {
                        cancelAppointment(info.event.id);
                    }
                }
            });

            calendar.render();
        });

        function openBookingForm(date) {
            const overlay = document.createElement('div');
            overlay.className = 'form-overlay';
            overlay.addEventListener('click', closeBookingForm);

            const formHTML = `
                <div class="booking-form">
                    <h3>Nieuwe afspraak</h3>
                    <form action="create_afspraak.php" method="POST">
                        <input type="hidden" name="datum" value="${date}">
                        <label for="klantnaam">Klantnaam:</label>
                        <input type="text" id="klantnaam" name="klantnaam" placeholder="Naam van klant" required>
                        <label for="tijdslot">Tijdslot:</label>
                        <select id="tijdslot" name="tijdslot" required>
                               <option value="08:30">08:30 - 08:45</option>
                            <option value="08:45">08:45 - 09:00</option>
                            <option value="09:00">09:00 - 09:15</option>
                            <option value="09:15">09:15 - 09:30</option>
                            <option value="09:30">09:30 - 09:45</option>
                            <option value="09:45">09:45 - 10:00</option>
                            <option value="10:00">10:00 - 10:15</option>
                            <option value="10:15">10:15 - 10:30</option>
                            <option value="10:30">10:30 - 10:45</option>
                            <option value="10:45">10:45 - 11:00</option>
                            <option value="11:15">11:15 - 11:30</option>
                            <option value="11:30">11:30 - 11:45</option>
                            <option value="11:45">11:45 - 12:00</option>
                            <option value="12:00">12:00 - 12:15</option>
                            <option value="12:15">12:15 - 12:30</option>
                            <option value="12:30">12:30 - 12:45</option>
                            <option value="12:45">12:45 - 13:00</option>
                            <option value="13:00">13:00 - 13:15</option>
                            <option value="13:45">13:45 - 14:00</option>
                            <option value="14:00">14:00 - 14:15</option>
                            <option value="14:15">14:15 - 14:30</option>
                            <option value="14:30">14:30 - 14:45</option>
                            <option value="14:45">14:45 - 15:00</option>
                            <option value="15:00">15:00 - 15:15</option>
                            <option value="15:15">15:15 - 15:30</option>
                            <option value="15:30">15:30 - 15:45</option>
                            <option value="15:45">15:45 - 16:00</option>
                            <option value="16:00">16:00 - 16:15</option>
                            <option value="16:15">16:15 - 16:30</option>
                            <option value="16:30">16:30 - 16:45</option>
                            <option value="16:45">16:45 - 17:00</option>
                            <option value="17:00">17:00 - 17:15</option>
                            <option value="17:15">17:15 - 17:30</option>
                            <option value="17:30">17:30 - 17:45</option>
                            <option value="17:45">17:45 - 18:00</option>
                        </select>
                        <label for="printsoort">Printsoort:</label>
                        <select id="printsoort" name="printsoort" required>
                            <option value="A5">A5</option>
                            <option value="A4">A4</option>
                            <option value="A3">A3</option>
                            <option value="A2">A2</option>
                            <option value="A1">A1</option>
                        </select>
                        <label for="aantal">Aantal prints:</label>
                        <input type="number" id="aantal" name="aantal" min="1" placeholder="Aantal" required>
                        <div class="buttons">
                            <button type="submit">Opslaan</button>
                            <button type="button" onclick="closeBookingForm()">Annuleren</button>
                        </div>
                    </form>
                </div>
            `;

            document.body.appendChild(overlay);
            document.body.insertAdjacentHTML('beforeend', formHTML);
        }

        function closeBookingForm() {
            const form = document.querySelector('.booking-form');
            const overlay = document.querySelector('.form-overlay');
            if (form) form.remove();
            if (overlay) overlay.remove();
        }

        function cancelAppointment(id) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "cancel_afspraak.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                    location.reload();
                }
            };
            xhr.send("id=" + id);
        }
    </script>
</body>
</html>
