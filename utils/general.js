export function playAudio(audioPath) {
    const audioPathIntro = audioPath + '_intro.mp3';
    const audioPathInstructions = audioPath + '_instructions.mp3';
    var audioIntro = new Audio(audioPathIntro);
    audioIntro.play();

    audioIntro.addEventListener('ended', function() {
        // Play another audio when the current one finishes
        playNextAudio(audioPathInstructions);
    });

    function playNextAudio(audioPathInstructions) {
        var nextAudio = new Audio(audioPathInstructions);
        nextAudio.play();
    }
}