var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let tempo = lines[0]
let velocidade = lines[1]

var distancia = tempo * velocidade

var combustivelnecessario = (distancia /  12).toFixed(3)

console.log(combustivelnecessario)