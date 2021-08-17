NFC.nfcEvent(function () {
    basic.showIcon(IconNames.Yes)
    basic.showString(NFC.getUID())
})
basic.showIcon(IconNames.Heart)
NFC.NFC_setSerial(SerialPin.P14, SerialPin.P13)
basic.forever(function () {
	
})
