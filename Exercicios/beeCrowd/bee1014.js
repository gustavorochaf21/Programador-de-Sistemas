var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0])
let b = Number(lines[1])

var x = a / b
var resultado = x.toFixed(3)

console.log(`${resultado} km/l`)