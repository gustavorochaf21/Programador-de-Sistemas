var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var [curupira, boitata, boto, Mapinguari, lara] = lines
console.log(curupira * 300 + boitata * 1500 + boto * 600 + Mapinguari * 1000 + lara * 150 + 225)
