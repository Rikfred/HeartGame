input.onButtonPressed(Button.A, function () {
    if (liv > 0) {
        paus = 0
        for (let index = 0; index < liv; index++) {
            basic.clearScreen()
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(400)
        }
        basic.pause(1000)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
input.onButtonPressed(Button.B, function () {
    paus = 1
    liv = 3
    while (paus == 1) {
        if (paus == 1) {
            basic.showIcon(IconNames.Chessboard)
            if (paus == 1) {
                basic.showIcon(IconNames.Square)
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (paus == 0) {
        paus = 1
        if (liv > 0) {
            liv += -1
        }
        if (liv == 0) {
            basic.showIcon(IconNames.Skull)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
let paus = 0
let liv = 0
liv = 3
paus = 1
while (paus == 1) {
    if (paus == 1) {
        basic.showIcon(IconNames.Chessboard)
        if (paus == 1) {
            basic.showIcon(IconNames.Square)
        }
    }
}
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
	
})
