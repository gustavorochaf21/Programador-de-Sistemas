var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

console.log((lines[0] * 2 )* 2)