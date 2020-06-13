Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Back, 51, 0)
    basic.pause(100)
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Back, 0, 0)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 0, 82)
    basic.pause(100)
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 0, 0)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 51, 0)
    basic.pause(100)
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 0, 0)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Back, 0, 76)
    basic.pause(100)
    mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Back, 0, 0)
})
basic.showLeds(`
    . . # # #
    . # . . .
    # . . . .
    . # . . .
    . . # # #
    `)
Mbit_IR.init(Pins.P8)
basic.forever(function () {
    if (mbit_传感器类.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 20) {
        music.playMelody("C D E F G A B C5 ", 1200)
    }
})
