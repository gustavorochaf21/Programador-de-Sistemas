var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ').map(Number);

var A = lines [0], B = lines [1], C = lines [2], D = lines [3];
var result = B > C  && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 ===0 ? "Valores aceitos" : "Valores nao aceitos"
console.log(result)