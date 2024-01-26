let Werkzeug = 0
input.onGesture(Gesture.Shake, function () {
    Werkzeug = randint(1, 3)
    if (Werkzeug == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Werkzeug == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
