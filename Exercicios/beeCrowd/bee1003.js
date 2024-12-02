var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0])
let b = Number(lines[1])

var resultado = a + b

console.log(`SOMA = ${resultado}`)