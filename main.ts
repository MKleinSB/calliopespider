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
    BeinHeben(0)
    BeinVor(0)
    BeinSenken(0)
    BeinHeben(3)
    BeinVor(3)
    BeinSenken(3)
})
input.onButtonPressed(Button.AB, function () {
    for (let Index3 = 0; Index3 <= 7; Index3++) {
        Servo.Servonum(Index3, Stehwerte[Index3])
    }
})
/**
 * Bein 1 Servo 0 und  Fuß 4
 * 
 * Bein 2 Servo 1 und  Fuß 5
 * 
 * Bein 3 Servo 2 und  Fuß 6
 * 
 * Bein 4 Servo 3 und Fuß 7
 */
input.onButtonPressed(Button.B, function () {
    BeinHeben(1)
    BeinVor(1)
    BeinSenken(1)
    BeinHeben(2)
    BeinVor(2)
    BeinSenken(2)
})
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinZurück (num: number) {
    Servo.Servonum(num, Startwerte[num])
    basic.pause(200)
}
function BeinVor (num: number) {
    Servo.Servonum(num, Vorwaerts[num])
    basic.pause(200)
}
let Vorwaerts: number[] = []
let Stehwerte: number[] = []
let Startwerte: number[] = []
Startwerte = [90, 98, 90, 90, 90, 90, 90, 90]
Stehwerte = [120, 110, 120, 90, 50, 40, 50, 160]
Vorwaerts = [170, 20, 170, 20, 90, 90, 60, 90]
