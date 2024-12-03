var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let ponto1 = lines[0].split(' ')
var x1 = ponto1[0]
var y1 = ponto1[1]

let ponto2 = lines[1].split(' ')
var x2 = ponto2[0]
var y2 = ponto2[1]

var distancia = Math.sqrt(((x2 - x1) **2) + ((y2 - y1) **2 )).toFixed(4)

console.log(distancia)