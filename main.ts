input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # . .
        # # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . # # # #
        . . # # #
        . # # # #
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
})
