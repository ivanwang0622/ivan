def my_function():
    basic.show_leds("""
        . . . . .
        . . # # .
        . # . . #
        # . . # .
        . # # . .
        """)
Mbit_IR.on_press_event(RemoteButton.POWER, my_function)

Mbit_IR.init(Pins.P8)

def on_forever():
    basic.show_number(mbit_传感器类.ultrasonic(DigitalPin.P14, DigitalPin.P15))
basic.forever(on_forever)

def my_function2():
    pass
Mbit_IR.on_press_event(RemoteButton.PLUS, my_function2)
