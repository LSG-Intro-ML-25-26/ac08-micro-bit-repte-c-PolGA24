let numero1 = 0
let numero2 = 0
radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(receivedNumber)
        if (numero1 > numero2) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("String")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    numero1 = randint(1, 6)
    radio.sendNumber(numero1)
    numero2 = randint(1, 6)
    basic.showNumber(numero2)
})
