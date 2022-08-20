input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < liv; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onGesture(Gesture.FreeFall, function () {
    if (liv > 0) {
        liv += -1
    }
    if (liv <= 0) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onSound(DetectedSound.Loud, function () {
    liv = 4
})
let liv = 0
liv = 3
let paus = 1
basic.forever(function () {
	
})
