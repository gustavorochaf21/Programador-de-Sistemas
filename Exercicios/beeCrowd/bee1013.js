var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

let a = lines[0]
let b = lines[1]
let c = lines[2]

// console.log(lines)

   var maior = Math.max(a, b, c)
    console.log(maior)
