basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 49)
    control.waitMicros(4)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 49)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 49)
    control.waitMicros(4)
})
