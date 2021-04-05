Ultraschall.onUltrasonicObjectDetected(20, DistanceUnit.CM, function () {
    basic.setLedColor(0xffff00)
})
function Zurück () {
    for (let Index = 0; Index <= 3; Index++) {
        BeinHeben(Index)
        BeinZurück(Index)
        BeinSenken(Index)
    }
    for (let Index32 = 0; Index32 <= 7; Index32++) {
        Servo.Servonum(Index32, Stehwerte[Index32])
    }
}
Ultraschall.onUltrasonicObjectDetected(10, DistanceUnit.CM, function () {
    basic.setLedColor(0xff0000)
})
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinSenken (num: number) {
    Servo.Servonum(num + 4, Stehwerte[num + 4])
}
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinHeben (num: number) {
    Servo.Servonum(num + 4, Vorwaerts[num + 4])
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    Zurück()
    radio.sendString("R")
})
function Vor () {
    for (let Index2 = 0; Index2 <= 3; Index2++) {
        BeinHeben(Index2)
        BeinVor(Index2)
        BeinSenken(Index2)
    }
    for (let Index32 = 0; Index32 <= 7; Index32++) {
        Servo.Servonum(Index32, Stehwerte[Index32])
    }
}
/**
 * Bein 1 Servo 0 und  Fuß 4
 * 
 * Bein 2 Servo 1 und  Fuß 5
 * 
 * Bein 3 Servo 2 und  Fuß 6
 * 
 * Bein 4 Servo 3 und Fuß 7
 */
input.onButtonPressed(Button.AB, function () {
    for (let Index3 = 0; Index3 <= 7; Index3++) {
        Servo.Servonum(Index3, Stehwerte[Index3])
    }
})
radio.onReceivedString(function (receivedString) {
    Befehl = receivedString
    if (Befehl == "V") {
        Vor()
    } else if (Befehl == "R") {
        Zurück()
    } else {
    	
    }
})
Ultraschall.onUltrasonicObjectDetected(30, DistanceUnit.CM, function () {
    basic.setLedColor(0x00ff00)
})
input.onButtonPressed(Button.B, function () {
    Vor()
    radio.sendString("V")
})
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinZurück (num: number) {
    Servo.Servonum(num, Rueckwaertswerte[num])
    basic.pause(200)
}
function BeinVor (num: number) {
    Servo.Servonum(num, Vorwaerts[num])
    basic.pause(200)
}
let Vorwaerts: number[] = []
let Stehwerte: number[] = []
let Rueckwaertswerte: number[] = []
let Befehl = ""
Ultraschall.connectUltrasonicDistanceSensor(DigitalPin.C16, DigitalPin.C17)
radio.setGroup(1)
Befehl = "X"
Rueckwaertswerte = [60, 150, 70, 150, 90, 90, 90, 90]
Stehwerte = [110, 110, 120, 90, 50, 40, 50, 160]
Vorwaerts = [150, 70, 155, 40, 90, 90, 60, 90]
