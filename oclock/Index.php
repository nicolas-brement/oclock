<head>
    <meta charset="utf-8">
    <title>Projet Oclock</title>
    <link rel="stylesheet" href="style2.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="shortcut icon" href="images/planet.png">
</head>

<body>
<!-- Minuteur -->
<h2>Minuteur</h2>
<div id="timer">
    <p id="time">00:00</p>
    <input type="number" id="inputTime" value="0">
    <button id="startBtn">Start/Stop</button>
    <button id="resetBtn">Reset</button>
</div>

<!--
<div>
    <label for="timeInput">Temps en minutes:</label>
    <input type="number" id="timeInput" value="1">
    <button id="startBtn">Démarrer</button>
    <button id="stopBtn">Arrêter</button>
    <div id="timerDisplay"></div>
</div>
-->


<!-- Chronomètre -->
<h2>Chronomètre</h2>

<div>
    <p id="minutesDisplay2">0</p> :
    <p id="secondsDisplay2">0</p> :
    <p id="millisecondsDisplay2">0</p>
</div>
<ul id="temps">
</ul>

<button id="startButton2">Start</button>
<button id="resetButton2">Reset</button>
<button id="lapButton2">Tour</button>

<ul id="laps">
</ul>

</body>
</html>




</html>

<script src="horloge.js"></script>
