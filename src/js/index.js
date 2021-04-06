import anime from 'animejs/lib/anime.es.js';

const bpm_to_interval = (value) => {
    let bps = (value / 60);
    return (1 / bps) * 1000;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const arrSize = 40;

let dataArray = new Uint8Array(arrSize);

let pauseFlag = false;
let animeTimer;


window.onload = () => {
    let beat_animation = anime({
        targets: '#image_logo',
        scale: '1.1',
        loop: true,
        duration: bpm_to_interval(92),
        autoplay: false
    });
    console.log('index.js loaded.');

    let audio_player = document.querySelector('#audio_player');
    audio_player.volume = 0.5;
    audio_player.play();

    audio_player.addEventListener('play', (e) => {
        pauseFlag = false;
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
            animeTimer = setInterval(() => {
                // let dataArray = new Uint8Array(analyzer.frequencyBinCount);
                let prevArray = [...dataArray];
                analyzer.getByteFrequencyData(dataArray);
                dataArray.forEach((value, index) => {
                    let dy = Math.abs(value - prevArray[index]);
                    anime({
                        targets: `.item-visualizer div:nth-child(${index + 1})`,
                        translateY: dy > 10 ? `-${value * 2.5}px` : `-${prevArray[index] * 2.5}px`,
                        translateY: `-${value * 2.5}px`,
                        duration: bpm_to_interval(92 * (4 - scale(dy, 0, 255, 0, 3))),
                        easing: 'linear',
                        complete: (anim) => {
                            if (pauseFlag) {
                                anime({
                                    targets: `.item-visualizer div:nth-child(${index + 1})`,
                                    translateY: `0px`,
                                    duration: bpm_to_interval(92),
                                    easing: 'easeInOutCirc'
                                });
                            }
                        }
                    });
                });
            }, bpm_to_interval(92 * 4));

        }, 500);
    });

    audio_player.addEventListener('pause', (e) => {
        pauseFlag = true;
        console.log('media paused');
        beat_animation.pause();
        clearInterval(animeTimer);
    });
};