document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeRange = document.getElementById('volumeRange');
    const backwardBtn = document.getElementById('backwardBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const visualizer = document.getElementById('visualizer');

    function updatePlayPauseIcon() {
        if (audio.paused) {
            playPauseBtn.innerHTML = '<span class="icon">&#9658;</span>'; // Icono de play
        } else {
            playPauseBtn.innerHTML = '<span class="icon">&#10074;&#10074;</span>'; // Icono de pausa
        }
    }

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            visualizer?.classList.add('active');
        } else {
            audio.pause();
            visualizer?.classList.remove('active');
        }
        updatePlayPauseIcon();
    });

    stopBtn.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        visualizer?.classList.remove('active');
        updatePlayPauseIcon(); // Asegura que el icono vuelva a play
    });

    volumeRange.addEventListener('input', function () {
        audio.volume = volumeRange.value / 100;
    });

    backwardBtn.addEventListener('click', function () {
        audio.currentTime -= 5; // Retrocede 5 segundos
    });

    forwardBtn.addEventListener('click', function () {
        audio.currentTime += 5; // Avanza 5 segundos
    });

    // Asegura que el icono sea correcto al cargar la página
    updatePlayPauseIcon();
});
