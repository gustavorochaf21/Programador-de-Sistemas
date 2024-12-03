var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])

var Atriangulo = ((a * c) / 2).toFixed(3)

var Acirculo = ((c ** 2) * 3.14159).toFixed(3)

var Atrapezio = (((a + b) * c) / 2).toFixed(3)

var Aquadrado = (b * b).toFixed(3)

var Aretangulo = (a * b).toFixed(3)

console.log(`TRIANGULO: ${Atriangulo}\nCIRCULO: ${Acirculo}\nTRAPEZIO: ${Atrapezio}\nQUADRADO: ${Aquadrado}\nRETANGULO: ${Aretangulo}`)
