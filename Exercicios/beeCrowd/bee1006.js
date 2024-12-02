var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0])
a = a * 2
let b = Number(lines[1])
b = b * 3
let c = Number(lines[2])
c = c * 5

var resultado = (a + b + c) / 10
resultado = resultado.toFixed(1)

console.log("MEDIA = " + resultado)