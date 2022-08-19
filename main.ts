input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < liv; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (liv > 0) {
        liv += -1
    }
})
let liv = 0
liv = 4
basic.forever(function () {
	
})
