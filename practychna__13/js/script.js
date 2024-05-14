document.getElementById("startButton").addEventListener("click", startGame);

function playSound() {
    var disney = new Audio("audio/song.mp3");
    disney.play();
}

function startGame() {
    playSound();
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";

    const skladnist = document.getElementById("skladnist").value;
    const color = document.getElementById("color").value;
    const target = document.getElementById("target");
    const targetArea = document.getElementById("targetArea");

    let size, radius, timeLimit;
    switch (skladnist) {
        case "easy":
            size = 150;
            radius = 100;
            timeLimit = 10;
            break;
        case "normal":
            size = 100;
            radius = 150;
            timeLimit = 5;
            break;
        case "hard":
            size = 50;
            radius = 200;
            timeLimit = 3;
            break;
    }

    target.src = `./ballon/${color}ballon.png`;

    target.style.width = `${size}px`;
    target.style.height = `${size}px`;

    let clicks = 0;
    let timeLeft = timeLimit;
    document.getElementById("clicks").textContent = clicks;
    document.getElementById("timeLeft").textContent = timeLeft;

    const interval = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            if (clicks < 20) {
                alert(`ОЙ лишенько( ${clicks} попадань. Це мало!`);
            } else if (clicks >= 10 && clicks < 50) {
                alert(`Ти можеш краще! ${clicks} попадань, продовжуй в тому ж дусі!`);
            } else if (clicks >= 20 && clicks < 100) {
                alert(`Чудовий результат! ${clicks} попадань`);
            } else if (clicks >= 50) {
                alert(`It's amazing!!!ВАУ!: ${clicks} попадань!`);
            }

            window.location.reload();
        }
    }, 1000);

    target.addEventListener("click", function () {
        clicks++;
        document.getElementById("clicks").textContent = clicks;
        moveTarget();
        timeLeft = timeLimit + 1;
    });

    function moveTarget() {
        const x = Math.random() * (targetArea.offsetWidth - size);
        const y = Math.random() * (targetArea.offsetHeight - size);
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
    }

    moveTarget();
}
