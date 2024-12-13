
var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split(' ');

var [carta1, carta2] = lines

console.log(Math.max(carta1,carta2))