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
        hit = 0
        max = 0
        timeStamp = control.millis()
        begin = 1
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
let senastTid = 0
let begin = 0
let timeStamp = 0
let max = 0
let hit = 0
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
    if (begin == 1) {
        if (input.acceleration(Dimension.Y) > 300) {
            begin = 0
            hit += 1
            basic.showIcon(IconNames.Target)
            basic.pause(200)
            basic.showIcon(IconNames.SmallDiamond)
            timeStamp = control.millis()
            begin = 1
        }
    }
})
loops.everyInterval(200, function () {
    if (begin == 1) {
        senastTid = control.millis() - timeStamp
        if (senastTid > 5000) {
            paus = 1
            begin = 0
            if (liv > 0) {
                liv += -1
            }
            if (liv == 0) {
                basic.showIcon(IconNames.Skull)
            } else {
                basic.showIcon(IconNames.No)
            }
            basic.pause(3000)
            basic.showNumber(hit)
            if (liv == 0) {
                basic.pause(3000)
                basic.showString("Max:")
                basic.showNumber(max)
            }
            if (hit > max) {
                max = hit
            }
        }
    }
})
