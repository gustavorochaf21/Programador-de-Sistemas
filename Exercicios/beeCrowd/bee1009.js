var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = Number(lines[1])

let b = Number(lines[2])

var total = (((b * 15)/ 100) + a).toFixed(2)

console.log(`TOTAL = R$ ${total}`)