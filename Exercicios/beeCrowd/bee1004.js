var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = lines[0]
let b = lines[1]

var resultado = a * b

console.log(`PROD = ${resultado}`)