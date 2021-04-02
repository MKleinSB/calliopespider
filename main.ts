// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinSenken (num: number) {
    Servo.Servonum(num + 3, 90)
}
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinHeben (num: number) {
    Servo.Servonum(num + 3, 90)
}
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinZurück (num: number) {
    Servo.Servonum(num - 1, 90)
}
// Bein 1 Servo 0 und 4
// Bein 2 Servo 1 und 5
// Bein 3 Servo 2 und 6
// Bein 4 Servo 3 und 7
// Bein X Servo (x-1) und (x+3)
function BeinVor (num: number) {
    Servo.Servonum(num - 1, 90)
}
/**
 * Bein 1 Servo 0 und  Fuß 4
 * 
 * Bein 2 Servo 1 und  Fuß 5
 * 
 * Bein 3 Servo 2 und  Fuß 6
 * 
 * Bein 4 Servo 3 und Fuß 7
 * 
 * Bein X Servo (x-1) und (x+3)
 */
for (let Index = 0; Index <= 7; Index++) {
    Servo.Servonum(Index, 90)
}
