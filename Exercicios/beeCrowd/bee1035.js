var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

var A = lines [0], B = lines [1], C = lines [2], D = lines [3];

if(B > C  && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 ===0){
    console.log(`Valores aceitos`)
} 
else console.log("Valores nao aceitos")