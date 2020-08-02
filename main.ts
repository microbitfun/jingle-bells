input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(250)
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 B A G F E D C ", 200)
})
basic.showIcon(IconNames.Happy)
