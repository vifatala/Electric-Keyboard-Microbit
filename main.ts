let middleCPressed = false
let middleDPressed = false
let middleEPressed = false
let middleFPressed = false
// Increasing or decreasing tones based on buttons pressed.
basic.forever(function () {
    if (middleCPressed && input.buttonIsPressed(Button.A)) {
        // High C
        music.ringTone(523)
    } else if (middleCPressed && input.buttonIsPressed(Button.B)) {
        // Low C
        music.ringTone(131)
    } else if (middleDPressed && input.buttonIsPressed(Button.A)) {
        // High D
        music.ringTone(587)
    } else if (middleDPressed && input.buttonIsPressed(Button.B)) {
        // Low D
        music.ringTone(147)
    } else if (middleEPressed && input.buttonIsPressed(Button.A)) {
        // High E
        music.ringTone(659)
    } else if (middleEPressed && input.buttonIsPressed(Button.B)) {
        // Low E
        music.ringTone(165)
    } else if (middleFPressed && input.buttonIsPressed(Button.A)) {
        // High F
        music.ringTone(698)
    } else if (middleFPressed && input.buttonIsPressed(Button.B)) {
        // Low F
        music.ringTone(175)
    }
})
// Volume based on button A or B and notes not being pressed.
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(middleCPressed || middleDPressed || middleEPressed || middleFPressed)) {
        music.setVolume(music.volume() + 60)
        basic.showNumber(music.volume())
    } else if (input.buttonIsPressed(Button.B) && !(middleCPressed || middleDPressed || middleEPressed || middleFPressed)) {
        music.setVolume(music.volume() - 60)
        basic.showNumber(music.volume())
    } else {
    	
    }
})
// Playing notes based on the button that is being pressed and it's value in Microbit's pin
basic.forever(function () {
    // C Middle
    // D Middle
    // E Middle
    // F Middle
    // No sound playing
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        while (pins.digitalReadPin(DigitalPin.P1) == 1) {
            middleCPressed = true
            music.ringTone(262)
            basic.showLeds(`
                . # # # .
                # . . . .
                # . . . .
                # . . . .
                . # # # .
                `)
        }
        middleCPressed = false
        music.stopAllSounds()
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        while (pins.digitalReadPin(DigitalPin.P2) == 1) {
            middleDPressed = true
            music.ringTone(294)
            basic.showLeds(`
                . # # # .
                . # . . #
                . # . . #
                . # . . #
                . # # # .
                `)
        }
        middleDPressed = false
        music.stopAllSounds()
    } else if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        while (pins.digitalReadPin(DigitalPin.P3) == 1) {
            middleEPressed = true
            music.ringTone(330)
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . . .
                . # # # .
                `)
        }
        middleEPressed = false
        music.stopAllSounds()
    } else if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        while (pins.digitalReadPin(DigitalPin.P4) == 1) {
            middleFPressed = true
            music.ringTone(349)
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . . .
                . # . . .
                `)
        }
        middleFPressed = false
        music.stopAllSounds()
    } else {
        middleCPressed = false
        middleDPressed = false
        middleEPressed = false
        middleFPressed = false
        music.stopAllSounds()
    }
})
// Function to play songs based on the button pressed
basic.forever(function () {
    if (middleCPressed && input.buttonIsPressed(Button.AB)) {
        music.setVolume(255)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (middleDPressed && input.buttonIsPressed(Button.AB)) {
        music.setVolume(255)
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    } else if (middleEPressed && input.buttonIsPressed(Button.AB)) {
        music.setVolume(255)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    } else if (middleFPressed && input.buttonIsPressed(Button.AB)) {
        music.setVolume(255)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else {
    	
    }
})
