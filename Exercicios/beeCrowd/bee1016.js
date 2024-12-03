var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let km = lines[0]

var tempo = km * 2

console.log(`${tempo} minutos`)
