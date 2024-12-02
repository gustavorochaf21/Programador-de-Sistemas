var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = lines[0]
a = a * 3.5
let b = lines[1]
b = b * 7.5

var resultado = (a + b) / 11
resultado = resultado.toFixed(5)

console.log(`MEDIA = ${resultado}`)