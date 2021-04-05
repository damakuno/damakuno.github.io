import anime from 'animejs/lib/anime.es.js';

const bpm_to_interval = (value) => {
    let bps = (value / 60);
    return (1 / bps) * 1000;
};

let dataArray = new Uint8Array(40);

window.onload = () => {
    let beat_animation = anime({
        targets: '#image_logo',
        scale: '1.1',
        loop: true,
        duration: bpm_to_interval(92),
        autoplay: false
    });
    beat_animation.play();
    console.log('index.js loaded.');

    let audio_player = document.querySelector('#audio_player');
    audio_player.volume = 0.4;
    audio_player.play();

    audio_player.addEventListener('play', (e) => {
        console.log('media playing');
        setTimeout(() => {
            let stream = audio_player.captureStream();

            let audioContext = new AudioContext();

            const mediaStreamSource = audioContext.createMediaStreamSource(stream);

            let analyzer = audioContext.createAnalyser();
            mediaStreamSource.connect(analyzer);

            const scriptProcessor = audioContext.createScriptProcessor();
            analyzer.connect(scriptProcessor);
            scriptProcessor.connect(audioContext.destination);

            beat_animation.play();
            setInterval(() => {
                // let dataArray = new Uint8Array(analyzer.frequencyBinCount);
                analyzer.getByteFrequencyData(dataArray);
                dataArray.forEach((value, index) => {
                    anime({
                        targets: `.item-visualizer div:nth-child(${index + 1})`,
                        translateY: `-${value * 2.5}px`,
                        duration: bpm_to_interval(92 * 1.5),
                        easing: 'easeInOutCirc',
                        direction: 'alternate'
                    });
                });
            }, bpm_to_interval(92));



        }, 100);
    });

    audio_player.addEventListener('pause', (e) => {
        console.log('media paused');
        beat_animation.pause();
    });
};