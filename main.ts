input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        pins.servoWritePin(AnalogPin.P0, 60)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.servoWritePin(AnalogPin.P0, 120)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    for (let index = 0; index < 5; index++) {
        pins.servoWritePin(AnalogPin.P0, 30)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 5; index++) {
        pins.servoWritePin(AnalogPin.P0, 160)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(500)
    }
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Happy)
pins.servoWritePin(AnalogPin.P0, 90)
