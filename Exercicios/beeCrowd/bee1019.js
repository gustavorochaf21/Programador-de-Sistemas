var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let N = lines[0]

var hh = Math.floor(N / 3600);
N %= 3600
var mm = Math.floor(N / 60)
N %= 60
var ss = N / 1
N %= 1

console.log(`${hh}:${mm}:${ss}`)
