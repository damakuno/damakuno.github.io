window.onload = () => {
    console.log('index.js loaded.');
    let audio_player = document.querySelector('#audio_player');
    audio_player.volume = 0.5;

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
        }
    });

    document.addEventListener('keypress', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
        }
    });
};