let ir_waarde = 0
basic.forever(function () {
    basic.showNumber(ir_waarde)
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
