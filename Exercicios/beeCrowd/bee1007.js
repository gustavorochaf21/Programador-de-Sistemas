var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])
let d = Number(lines[3])

var resultado = (a * b) - (c * d)


console.log(`DIFERENCA = ${resultado}`)