var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split();

let a = lines[0]

var resultado = 3.14159 * (a * a)
resultado = resultado.toFixed(4)

console.log(`A=${resultado}`)