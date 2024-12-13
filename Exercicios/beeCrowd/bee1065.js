var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n').map(Number);

const filtraPar = (num) => num % 2 === 0
 
console.log(`${lines.filter(filtraPar).length} valores pares`)