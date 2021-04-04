import anime from 'animejs/lib/anime.es.js';

window.onload = () => {
    console.log('index.js loaded.');
    let audio_player = document.querySelector('#audio_player');
    audio_player.volume = 0.3;

    audio_player.addEventListener('play', (e) => {
        console.log('media playing');
        let stream = audio_player.captureStream();

        let audioContext = new AudioContext();

        const mediaStreamSource = audioContext.createMediaStreamSource(stream);

        let analyzer = audioContext.createAnalyser();
        mediaStreamSource.connect(analyzer);

        const scriptProcessor = audioContext.createScriptProcessor();
        analyzer.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        anime({
            targets: '#image_logo',
            scale: '1.1',
            loop: true,
            duration: (1 / 1.5) * 1000
        });

        let dataArray = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(dataArray);
    });

};