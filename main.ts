let strip: neopixel.Strip = null
let ir_waarde = 0
let rechts = 25
let vooruit = 27
let links = 11
let achteruit = 4
let stop = 94
basic.forever(function () {
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 45)
        strip = neopixel.create(DigitalPin.P0, 27, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (ir_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 45)
        strip = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (ir_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
        strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
    if (ir_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 45)
        strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (ir_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
        strip = neopixel.create(DigitalPin.P0, 94, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
