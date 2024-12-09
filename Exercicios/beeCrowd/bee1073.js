var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let Numero = lines[0]

for(var i = 2; i <= Numero; i += 2) console.log(`${i}^2 = ${i**2}`);