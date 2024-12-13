var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let [desejada, atual] = lines
console.log(desejada - atual)
