input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < liv; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onSound(DetectedSound.Loud, function () {
    liv = 4
})
input.onGesture(Gesture.Shake, function () {
    if (liv > 0) {
        liv += -1
    }
    if (liv <= 0) {
        basic.showIcon(IconNames.Skull)
    }
})
let liv = 0
liv = 4
basic.forever(function () {
	
})
