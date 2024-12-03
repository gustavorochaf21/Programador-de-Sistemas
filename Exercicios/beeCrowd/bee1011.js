var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('/n');

let a = Number(lines[0])

var total = ((4 * 3.14159 * (a ** 3))/3).toFixed(3)

console.log(`VOLUME = ${total}`)
// console.log(a);